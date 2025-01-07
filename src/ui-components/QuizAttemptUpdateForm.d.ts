/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuizAttemptUpdateFormInputValues = {
    score?: number;
    completed?: boolean;
    userAnswers?: string;
    assignmentID?: string;
    userId?: string;
    ownerRole?: string;
};
export declare type QuizAttemptUpdateFormValidationValues = {
    score?: ValidationFunction<number>;
    completed?: ValidationFunction<boolean>;
    userAnswers?: ValidationFunction<string>;
    assignmentID?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    ownerRole?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizAttemptUpdateFormOverridesProps = {
    QuizAttemptUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    userAnswers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    assignmentID?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    ownerRole?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type QuizAttemptUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuizAttemptUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    quizAttempt?: any;
    onSubmit?: (fields: QuizAttemptUpdateFormInputValues) => QuizAttemptUpdateFormInputValues;
    onSuccess?: (fields: QuizAttemptUpdateFormInputValues) => void;
    onError?: (fields: QuizAttemptUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuizAttemptUpdateFormInputValues) => QuizAttemptUpdateFormInputValues;
    onValidate?: QuizAttemptUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuizAttemptUpdateForm(props: QuizAttemptUpdateFormProps): React.ReactElement;
