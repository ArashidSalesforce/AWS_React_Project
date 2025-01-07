/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ContactPageOverridesProps = {
    ContactPage?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Lessons and Questions"?: PrimitiveOverrideProps<TextProps>;
    "Students (Grades and Attendence)"?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4376"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "Nos encanta escuchar a nuestros clientes"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4374"?: PrimitiveOverrideProps<FlexProps>;
    "Everything 2"?: PrimitiveOverrideProps<ImageProps>;
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ContactPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactPageOverridesProps | undefined | null;
}>;
export default function ContactPage(props: ContactPageProps): React.ReactElement;
