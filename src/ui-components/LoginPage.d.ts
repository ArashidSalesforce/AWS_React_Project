/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPageOverridesProps = {
    LoginPage?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "\u00A1Bienvenido/a de vuelta!"?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
    label38701974?: PrimitiveOverrideProps<TextProps>;
    InputGroup38701976?: PrimitiveOverrideProps<FlexProps>;
    Input38701977?: PrimitiveOverrideProps<FlexProps>;
    placeholder38701978?: PrimitiveOverrideProps<TextProps>;
    PasswordField?: PrimitiveOverrideProps<FlexProps>;
    label38701981?: PrimitiveOverrideProps<TextProps>;
    InputGroup38701983?: PrimitiveOverrideProps<FlexProps>;
    Input38701984?: PrimitiveOverrideProps<FlexProps>;
    placeholder38701985?: PrimitiveOverrideProps<TextProps>;
    Button38702006?: PrimitiveOverrideProps<FlexProps>;
    label38702008?: PrimitiveOverrideProps<TextProps>;
    "Button Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector38702022?: PrimitiveOverrideProps<IconProps>;
    "Frame 4372"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<FlexProps>;
    CheckBox?: PrimitiveOverrideProps<FlexProps>;
    Fill?: PrimitiveOverrideProps<ViewProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector38702016?: PrimitiveOverrideProps<IconProps>;
    label38702004?: PrimitiveOverrideProps<TextProps>;
    Button38702011?: PrimitiveOverrideProps<FlexProps>;
    label38702013?: PrimitiveOverrideProps<TextProps>;
    Button38701992?: PrimitiveOverrideProps<FlexProps>;
    label38701994?: PrimitiveOverrideProps<TextProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
    "\u00BFNo tienes una cuenta?"?: PrimitiveOverrideProps<TextProps>;
    Button38702017?: PrimitiveOverrideProps<FlexProps>;
    label38702019?: PrimitiveOverrideProps<TextProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4378"?: PrimitiveOverrideProps<FlexProps>;
    "Everything 1"?: PrimitiveOverrideProps<ImageProps>;
    "\u00A1Bienvenido a Kairos! Una plataforma de aprendizaje integrada hecha para estudiantes"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginPageOverridesProps | undefined | null;
}>;
export default function LoginPage(props: LoginPageProps): React.ReactElement;
