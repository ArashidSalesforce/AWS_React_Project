/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      name
      role
      contactNumber
      assignments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        name
        role
        contactNumber
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAssignment = /* GraphQL */ `
  query GetAssignment($id: ID!) {
    getAssignment(id: $id) {
      id
      name
      description
      isActive
      questions
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        isActive
        questions
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const assignmentsByOwner = /* GraphQL */ `
  query AssignmentsByOwner(
    $owner: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assignmentsByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        isActive
        questions
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuizAttempt = /* GraphQL */ `
  query GetQuizAttempt($id: ID!) {
    getQuizAttempt(id: $id) {
      id
      score
      completed
      userAnswers
      assignmentID
      userId
      ownerRole
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuizAttempts = /* GraphQL */ `
  query ListQuizAttempts(
    $filter: ModelQuizAttemptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        score
        completed
        userAnswers
        assignmentID
        userId
        ownerRole
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const quizAttemptsByAssignment = /* GraphQL */ `
  query QuizAttemptsByAssignment(
    $assignmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuizAttemptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quizAttemptsByAssignment(
      assignmentID: $assignmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        score
        completed
        userAnswers
        assignmentID
        userId
        ownerRole
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const quizAttemptsByUser = /* GraphQL */ `
  query QuizAttemptsByUser(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelQuizAttemptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quizAttemptsByUser(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        score
        completed
        userAnswers
        assignmentID
        userId
        ownerRole
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserAssignment = /* GraphQL */ `
  query GetUserAssignment($id: ID!) {
    getUserAssignment(id: $id) {
      id
      status
      assignmentID
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserAssignments = /* GraphQL */ `
  query ListUserAssignments(
    $filter: ModelUserAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        assignmentID
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userAssignmentsByAssignmentID = /* GraphQL */ `
  query UserAssignmentsByAssignmentID(
    $assignmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userAssignmentsByAssignmentID(
      assignmentID: $assignmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        assignmentID
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
