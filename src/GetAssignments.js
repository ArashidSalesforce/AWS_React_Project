export const getUserAssignment = `
  query GetUserAssignment($id: ID!) {
    getUserAssignment(id: $id) {
      id
      Status
      assignmentID
      UserId
      createdAt
      updatedAt
      __typename
    }
  }
`;
