/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAssignment = /* GraphQL */ `
  mutation CreateAssignment(
    $input: CreateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    createAssignment(input: $input, condition: $condition) {
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
export const updateAssignment = /* GraphQL */ `
  mutation UpdateAssignment(
    $input: UpdateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    updateAssignment(input: $input, condition: $condition) {
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
export const deleteAssignment = /* GraphQL */ `
  mutation DeleteAssignment(
    $input: DeleteAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    deleteAssignment(input: $input, condition: $condition) {
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
export const createQuizAttempt = /* GraphQL */ `
  mutation CreateQuizAttempt(
    $input: CreateQuizAttemptInput!
    $condition: ModelQuizAttemptConditionInput
  ) {
    createQuizAttempt(input: $input, condition: $condition) {
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
export const updateQuizAttempt = /* GraphQL */ `
  mutation UpdateQuizAttempt(
    $input: UpdateQuizAttemptInput!
    $condition: ModelQuizAttemptConditionInput
  ) {
    updateQuizAttempt(input: $input, condition: $condition) {
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
export const deleteQuizAttempt = /* GraphQL */ `
  mutation DeleteQuizAttempt(
    $input: DeleteQuizAttemptInput!
    $condition: ModelQuizAttemptConditionInput
  ) {
    deleteQuizAttempt(input: $input, condition: $condition) {
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
export const createUserAssignment = /* GraphQL */ `
  mutation CreateUserAssignment(
    $input: CreateUserAssignmentInput!
    $condition: ModelUserAssignmentConditionInput
  ) {
    createUserAssignment(input: $input, condition: $condition) {
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
export const updateUserAssignment = /* GraphQL */ `
  mutation UpdateUserAssignment(
    $input: UpdateUserAssignmentInput!
    $condition: ModelUserAssignmentConditionInput
  ) {
    updateUserAssignment(input: $input, condition: $condition) {
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
export const deleteUserAssignment = /* GraphQL */ `
  mutation DeleteUserAssignment(
    $input: DeleteUserAssignmentInput!
    $condition: ModelUserAssignmentConditionInput
  ) {
    deleteUserAssignment(input: $input, condition: $condition) {
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
