/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ProfilePageOverridesProps = {
    ProfilePage?: PrimitiveOverrideProps<FlexProps>;
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    "Inscr\u00EDbete a nuestro bolet\u00EDn"?: PrimitiveOverrideProps<TextProps>;
    "Sin spam. Lo prometemos."?: PrimitiveOverrideProps<TextProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    Divider38703831?: PrimitiveOverrideProps<ViewProps>;
    "Frame 40538703832"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 40538703845"?: PrimitiveOverrideProps<FlexProps>;
    "Cont\u00E1ctanos"?: PrimitiveOverrideProps<TextProps>;
    Terms?: PrimitiveOverrideProps<TextProps>;
    Divider38703850?: PrimitiveOverrideProps<ViewProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "\u00A9 2023 AWS Amplify UI. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    ProfileCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    "Email:"?: PrimitiveOverrideProps<TextProps>;
    Followers?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    "Points: 5"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfilePageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProfilePageOverridesProps | undefined | null;
}>;
export default function ProfilePage(props: ProfilePageProps): React.ReactElement;
