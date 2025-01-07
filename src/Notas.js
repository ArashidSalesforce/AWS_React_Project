import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '@aws-amplify/auth';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { utils, writeFile } from 'xlsx';
import logo from './KAIROS.png';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Notas({ onLogout }) {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');
  const [sortConfig, setSortConfig] = useState({ field: '', direction: 'asc' });
  const [filteredList, setFilteredList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Initialize DynamoDB client
  const dynamoDBClient = useMemo(() => new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: '', // Use Auth Import of Choice
      secretAccessKey: '', // Use Auth Import of Choice
    },
  }), []);

  const handleLogout = async () => {
    try {
      await signOut();
      onLogout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const fetchNotes = useCallback(async () => {
    setError('');
    try {
      console.log('Fetching notes from DynamoDB...');
      const params = {
        TableName: 'QuizAttempt-lsxs7q4abbc7fb6tsu4xahtvmm-staging',
      };

      const command = new ScanCommand(params);
      const response = await dynamoDBClient.send(command);

      console.log('DynamoDB Response:', response);

      const fetchedItems = response.Items || [];
      setNotes(fetchedItems);

      if (!fetchedItems.length) {
        setError('No notes found.');
      }
    } catch (err) {
      console.error('Error fetching notes from DynamoDB:', err);
      setError('Unable to fetch notes. Check your query and network.');
    }
  }, [dynamoDBClient]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // Handle Sorting
  const handleSort = (field) => {
    let direction = 'asc';
    if (sortConfig.field === field && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ field, direction });

    const sortedNotes = [...notes].sort((a, b) => {
      const aValue = a[field] || '';
      const bValue = b[field] || '';

      if (direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setNotes(sortedNotes);
  };

  // Generate Data for Pie Chart
  const pieChartData = useMemo(() => {
    const scores = notes.reduce((acc, note) => {
      const key = note.assignmentID || 'Unknown';
      acc[key] = acc[key] ? acc[key] + 1 : 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(scores),
      datasets: [
        {
          data: Object.values(scores),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },
      ],
    };
  }, [notes]);

  const handlePieClick = (elements) => {
    if (elements.length === 0) return;
    const clickedAssignment = pieChartData.labels[elements[0].index];
    const filtered = notes.filter((note) => note.assignmentID === clickedAssignment);
    setFilteredList(filtered);
    setSelectedFilter(clickedAssignment);
  };

  const exportToCSV = (data, filename) => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    writeFile(workbook, `${filename}.xlsx`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fae3d9] via-white to-gray-100 font-[Fredoka]">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center h-28">
          <img src={logo} alt="Kairos Logo" className="h-32" />
          <button
            className="bg-gradient-to-r from-[#e5b364] to-[#dba75e] text-white px-4 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-[#e5b364] to-[#dba75e] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-center md:justify-start space-x-6 py-3">
          <NavLink to="/" className="text-lg font-bold hover:text-gray-100 transition duration-200" end>
            Inicio
          </NavLink>
          <NavLink to="/tareas" className="text-lg font-bold hover:text-gray-100 transition duration-200">
            Tareas
          </NavLink>
          <NavLink to="/notas" className="text-lg font-bold hover:text-gray-100 transition duration-200">
            Notas
          </NavLink>
          <NavLink to="/contacto" className="text-lg font-bold hover:text-gray-100 transition duration-200">
            Contacto
          </NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="text-center px-4 mt-8">
          <h2 className="text-5xl font-bold text-[#2f49a6]">Notas</h2>
        </div>

        {/* Notes Table */}
        <section className="max-w-7xl mx-auto px-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Lista de Notas</h3>
              <button
                onClick={() => exportToCSV(notes, 'Notes_List')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Export to CSV
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('userId')}>
                    User ID {sortConfig.field === 'userId' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th className="border-b px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('assignmentID')}>
                    Assignment {sortConfig.field === 'assignmentID' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th className="border-b px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('score')}>
                    Score {sortConfig.field === 'score' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th className="border-b px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('ownerRole')}>
                    Owner Role {sortConfig.field === 'ownerRole' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th className="border-b px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('createdAt')}>
                    Created At {sortConfig.field === 'createdAt' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {notes.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">No notes available.</td>
                  </tr>
                ) : (
                  notes.map((note, index) => (
                    <tr key={note.id || index}>
                      <td className="border-b px-4 py-2">{note.userId || 'N/A'}</td>
                      <td className="border-b px-4 py-2">{note.assignmentID || 'N/A'}</td>
                      <td className="border-b px-4 py-2">{note.score || 'N/A'}</td>
                      <td className="border-b px-4 py-2">{note.ownerRole || 'N/A'}</td>
                      <td className="border-b px-4 py-2">{note.createdAt || 'N/A'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Report Section */}
        <section className="max-w-7xl mx-auto px-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Report</h3>
            <div key={selectedFilter || 'default-pie-chart'}>
              <Pie
                data={pieChartData}
                options={{
                  onClick: (_, elements) => handlePieClick(elements),
                }}
              />
            </div>

            {/* Filtered List */}
            {selectedFilter && (
              <div className="mt-8">
                <h4 className="text-xl font-bold">Filtered Scores for: {selectedFilter}</h4>
                <button
                  onClick={() => exportToCSV(filteredList, 'Filtered_Report')}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                >
                  Export to CSV
                </button>
                <table className="min-w-full border-collapse mt-4">
                  <thead>
                    <tr>
                      <th className="border-b px-4 py-2 text-left">User ID</th>
                      <th className="border-b px-4 py-2 text-left">Score</th>
                      <th className="border-b px-4 py-2 text-left">Owner Role</th>
                      <th className="border-b px-4 py-2 text-left">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredList.map((note, index) => (
                      <tr key={note.id || index}>
                        <td className="border-b px-4 py-2">{note.userId || 'N/A'}</td>
                        <td className="border-b px-4 py-2">{note.score || 'N/A'}</td>
                        <td className="border-b px-4 py-2">{note.ownerRole || 'N/A'}</td>
                        <td className="border-b px-4 py-2">{note.createdAt || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="text-center">
          <p className="text-sm md:text-lg">Copyright © 2024 | Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Notas;














