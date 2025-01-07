import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { signUp } from '@aws-amplify/auth'; // Cognito SignUp API
import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql'; // GraphQL API
import Papa from 'papaparse';
import awsExports from './aws-exports';
import { createUser } from './graphql/mutations'; // Adjust path as needed

Amplify.configure(awsExports);

function UserManagement() {
  const [formData, setFormData] = useState({ email: '', username: '', name: '', role: 'STUDENT' });
  const [csvData, setCsvData] = useState([]);

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Sanitize the username (remove invalid characters)
  const sanitizeUsername = (username) => {
    return username.replace(/\s+/g, '').replace(/[^a-zA-Z0-9._-]/g, '');
  };

  // Single User Creation
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate email format
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
      }

      // Use email as username
      const username = formData.email;

      // Step 1: Create User in Cognito
      const newUser = await signUp({
        username: username,
        password: 'TemporaryPassword123!', // Temporary password
        attributes: {
          email: formData.email,
          name: formData.name, // Add name to Cognito
          'custom:role': formData.role, // Add role to Cognito
        },
      });

      console.log('Cognito Response:', newUser);

      // Correctly retrieve the userId
      const userId = newUser.userSub || newUser.user?.sub;
      if (!userId) {
        throw new Error('Failed to retrieve userSub from Cognito response.');
      }

      console.log('Retrieved userSub:', userId);

      // Step 2: Add User to Amplify User Table
      const userTableInput = {
        id: userId, // Use Cognito userSub as the ID
        username: username,
        email: formData.email,
        name: formData.name,
        role: formData.role,
      };

      console.log('Creating user in Amplify User Table with input:', userTableInput);

      const userTableData = await GraphQLAPI.graphql(
        graphqlOperation(createUser, { input: userTableInput })
      );

      console.log('User created in Amplify User Table:', userTableData);

      alert('User created successfully!');
      setFormData({ email: '', username: '', name: '', role: 'STUDENT' }); // Reset form
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user.');
    }
  };

  // Handle CSV upload
  const handleCsvUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log('CSV Data:', results.data);
          setCsvData(results.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        },
      });
    }
  };

  // Bulk User Creation from CSV
  const handleBulkCreate = async () => {
    try {
      for (const user of csvData) {
        // Step 1: Create User in Cognito
        const cognitoUser = await signUp({
          username: sanitizeUsername(user.username),
          password: 'TemporaryPassword123!', // Temporary password
          attributes: {
            email: user.email,
            name: user.name, // Add name to Cognito
            'custom:role': user.role, // Custom attribute for role
          },
        });

        console.log('User created in Cognito:', cognitoUser);

        // Step 2: Add User to Amplify User Table
        const userTableData = await GraphQLAPI.graphql(
          graphqlOperation(createUser, {
            input: {
              id: cognitoUser.userSub, // Use Cognito userSub as ID
              username: sanitizeUsername(user.username),
              email: user.email,
              name: user.name, // Add name to User Table
              role: user.role,
            },
          })
        );

        console.log('User created in Amplify User Table:', userTableData);
      }

      alert('All users created successfully!');
      setCsvData([]);
    } catch (error) {
      console.error('Error creating users:', error);
      alert('Failed to create some users.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Single User Creation Form */}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-bold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="username" className="block font-bold">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="name" className="block font-bold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="role" className="block font-bold">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
            <option value="PARENT">Parent</option>
            <option value="SUPERVISOR">Supervisor</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create User
        </button>
      </form>

      <hr className="my-8" />

      {/* CSV Upload for Bulk Creation */}
      <div>
        <h2 className="text-xl font-bold mb-2">Bulk User Creation</h2>
        <input type="file" accept=".csv" onChange={handleCsvUpload} className="mb-4" />
        {csvData.length > 0 && (
          <button
            onClick={handleBulkCreate}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Create Users from CSV
          </button>
        )}
      </div>
    </div>
  );
}

export default UserManagement;

