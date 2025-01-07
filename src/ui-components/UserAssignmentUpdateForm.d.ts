/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserAssignmentUpdateFormInputValues = {
    status?: string;
    assignmentID?: string;
    userId?: string;
};
export declare type UserAssignmentUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
    assignmentID?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAssignmentUpdateFormOverridesProps = {
    UserAssignmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    assignmentID?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserAssignmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserAssignmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userAssignment?: any;
    onSubmit?: (fields: UserAssignmentUpdateFormInputValues) => UserAssignmentUpdateFormInputValues;
    onSuccess?: (fields: UserAssignmentUpdateFormInputValues) => void;
    onError?: (fields: UserAssignmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserAssignmentUpdateFormInputValues) => UserAssignmentUpdateFormInputValues;
    onValidate?: UserAssignmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserAssignmentUpdateForm(props: UserAssignmentUpdateFormProps): React.ReactElement;
