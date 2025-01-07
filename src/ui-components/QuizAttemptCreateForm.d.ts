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
export declare type QuizAttemptCreateFormInputValues = {
    score?: number;
    completed?: boolean;
    userAnswers?: string;
    assignmentID?: string;
    userId?: string;
    ownerRole?: string;
};
export declare type QuizAttemptCreateFormValidationValues = {
    score?: ValidationFunction<number>;
    completed?: ValidationFunction<boolean>;
    userAnswers?: ValidationFunction<string>;
    assignmentID?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    ownerRole?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizAttemptCreateFormOverridesProps = {
    QuizAttemptCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    userAnswers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    assignmentID?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    ownerRole?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type QuizAttemptCreateFormProps = React.PropsWithChildren<{
    overrides?: QuizAttemptCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuizAttemptCreateFormInputValues) => QuizAttemptCreateFormInputValues;
    onSuccess?: (fields: QuizAttemptCreateFormInputValues) => void;
    onError?: (fields: QuizAttemptCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuizAttemptCreateFormInputValues) => QuizAttemptCreateFormInputValues;
    onValidate?: QuizAttemptCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuizAttemptCreateForm(props: QuizAttemptCreateFormProps): React.ReactElement;
