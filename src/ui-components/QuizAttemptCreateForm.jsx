/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createQuizAttempt } from "../graphql/mutations";
const client = generateClient();
export default function QuizAttemptCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    score: "",
    completed: false,
    userAnswers: "",
    assignmentID: "",
    userId: "",
    ownerRole: "",
  };
  const [score, setScore] = React.useState(initialValues.score);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [userAnswers, setUserAnswers] = React.useState(
    initialValues.userAnswers
  );
  const [assignmentID, setAssignmentID] = React.useState(
    initialValues.assignmentID
  );
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [ownerRole, setOwnerRole] = React.useState(initialValues.ownerRole);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setScore(initialValues.score);
    setCompleted(initialValues.completed);
    setUserAnswers(initialValues.userAnswers);
    setAssignmentID(initialValues.assignmentID);
    setUserId(initialValues.userId);
    setOwnerRole(initialValues.ownerRole);
    setErrors({});
  };
  const validations = {
    score: [],
    completed: [{ type: "Required" }],
    userAnswers: [{ type: "JSON" }],
    assignmentID: [{ type: "Required" }],
    userId: [{ type: "Required" }],
    ownerRole: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          score,
          completed,
          userAnswers,
          assignmentID,
          userId,
          ownerRole,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createQuizAttempt.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "QuizAttemptCreateForm")}
      {...rest}
    >
      <TextField
        label="Score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={score}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              score: value,
              completed,
              userAnswers,
              assignmentID,
              userId,
              ownerRole,
            };
            const result = onChange(modelFields);
            value = result?.score ?? value;
          }
          if (errors.score?.hasError) {
            runValidationTasks("score", value);
          }
          setScore(value);
        }}
        onBlur={() => runValidationTasks("score", score)}
        errorMessage={errors.score?.errorMessage}
        hasError={errors.score?.hasError}
        {...getOverrideProps(overrides, "score")}
      ></TextField>
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              score,
              completed: value,
              userAnswers,
              assignmentID,
              userId,
              ownerRole,
            };
            const result = onChange(modelFields);
            value = result?.completed ?? value;
          }
          if (errors.completed?.hasError) {
            runValidationTasks("completed", value);
          }
          setCompleted(value);
        }}
        onBlur={() => runValidationTasks("completed", completed)}
        errorMessage={errors.completed?.errorMessage}
        hasError={errors.completed?.hasError}
        {...getOverrideProps(overrides, "completed")}
      ></SwitchField>
      <TextAreaField
        label="User answers"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              score,
              completed,
              userAnswers: value,
              assignmentID,
              userId,
              ownerRole,
            };
            const result = onChange(modelFields);
            value = result?.userAnswers ?? value;
          }
          if (errors.userAnswers?.hasError) {
            runValidationTasks("userAnswers", value);
          }
          setUserAnswers(value);
        }}
        onBlur={() => runValidationTasks("userAnswers", userAnswers)}
        errorMessage={errors.userAnswers?.errorMessage}
        hasError={errors.userAnswers?.hasError}
        {...getOverrideProps(overrides, "userAnswers")}
      ></TextAreaField>
      <TextField
        label="Assignment id"
        isRequired={true}
        isReadOnly={false}
        value={assignmentID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              score,
              completed,
              userAnswers,
              assignmentID: value,
              userId,
              ownerRole,
            };
            const result = onChange(modelFields);
            value = result?.assignmentID ?? value;
          }
          if (errors.assignmentID?.hasError) {
            runValidationTasks("assignmentID", value);
          }
          setAssignmentID(value);
        }}
        onBlur={() => runValidationTasks("assignmentID", assignmentID)}
        errorMessage={errors.assignmentID?.errorMessage}
        hasError={errors.assignmentID?.hasError}
        {...getOverrideProps(overrides, "assignmentID")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              score,
              completed,
              userAnswers,
              assignmentID,
              userId: value,
              ownerRole,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <SelectField
        label="Owner role"
        placeholder="Please select an option"
        isDisabled={false}
        value={ownerRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              score,
              completed,
              userAnswers,
              assignmentID,
              userId,
              ownerRole: value,
            };
            const result = onChange(modelFields);
            value = result?.ownerRole ?? value;
          }
          if (errors.ownerRole?.hasError) {
            runValidationTasks("ownerRole", value);
          }
          setOwnerRole(value);
        }}
        onBlur={() => runValidationTasks("ownerRole", ownerRole)}
        errorMessage={errors.ownerRole?.errorMessage}
        hasError={errors.ownerRole?.hasError}
        {...getOverrideProps(overrides, "ownerRole")}
      >
        <option
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "ownerRoleoption0")}
        ></option>
        <option
          children="Supervisor"
          value="SUPERVISOR"
          {...getOverrideProps(overrides, "ownerRoleoption1")}
        ></option>
        <option
          children="Teacher"
          value="TEACHER"
          {...getOverrideProps(overrides, "ownerRoleoption2")}
        ></option>
        <option
          children="Parent"
          value="PARENT"
          {...getOverrideProps(overrides, "ownerRoleoption3")}
        ></option>
        <option
          children="Student"
          value="STUDENT"
          {...getOverrideProps(overrides, "ownerRoleoption4")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
