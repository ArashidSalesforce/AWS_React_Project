/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateAssignment = /* GraphQL */ `
  subscription OnCreateAssignment(
    $filter: ModelSubscriptionAssignmentFilterInput
  ) {
    onCreateAssignment(filter: $filter) {
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
export const onUpdateAssignment = /* GraphQL */ `
  subscription OnUpdateAssignment(
    $filter: ModelSubscriptionAssignmentFilterInput
  ) {
    onUpdateAssignment(filter: $filter) {
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
export const onDeleteAssignment = /* GraphQL */ `
  subscription OnDeleteAssignment(
    $filter: ModelSubscriptionAssignmentFilterInput
  ) {
    onDeleteAssignment(filter: $filter) {
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
export const onCreateQuizAttempt = /* GraphQL */ `
  subscription OnCreateQuizAttempt(
    $filter: ModelSubscriptionQuizAttemptFilterInput
  ) {
    onCreateQuizAttempt(filter: $filter) {
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
export const onUpdateQuizAttempt = /* GraphQL */ `
  subscription OnUpdateQuizAttempt(
    $filter: ModelSubscriptionQuizAttemptFilterInput
  ) {
    onUpdateQuizAttempt(filter: $filter) {
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
export const onDeleteQuizAttempt = /* GraphQL */ `
  subscription OnDeleteQuizAttempt(
    $filter: ModelSubscriptionQuizAttemptFilterInput
  ) {
    onDeleteQuizAttempt(filter: $filter) {
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
export const onCreateUserAssignment = /* GraphQL */ `
  subscription OnCreateUserAssignment(
    $filter: ModelSubscriptionUserAssignmentFilterInput
  ) {
    onCreateUserAssignment(filter: $filter) {
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
export const onUpdateUserAssignment = /* GraphQL */ `
  subscription OnUpdateUserAssignment(
    $filter: ModelSubscriptionUserAssignmentFilterInput
  ) {
    onUpdateUserAssignment(filter: $filter) {
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
export const onDeleteUserAssignment = /* GraphQL */ `
  subscription OnDeleteUserAssignment(
    $filter: ModelSubscriptionUserAssignmentFilterInput
  ) {
    onDeleteUserAssignment(filter: $filter) {
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
