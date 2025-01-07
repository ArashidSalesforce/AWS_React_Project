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
export declare type HomeOverridesProps = {
    Home?: PrimitiveOverrideProps<FlexProps>;
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    "Inscr\u00EDbete a nuestro bolet\u00EDn"?: PrimitiveOverrideProps<TextProps>;
    "Sin spam. Lo prometemos."?: PrimitiveOverrideProps<TextProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    Divider38702588?: PrimitiveOverrideProps<ViewProps>;
    "Frame 40538702589"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 40538702602"?: PrimitiveOverrideProps<FlexProps>;
    "Cont\u00E1ctanos"?: PrimitiveOverrideProps<TextProps>;
    Terms?: PrimitiveOverrideProps<TextProps>;
    Divider38702607?: PrimitiveOverrideProps<ViewProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "\u00A9 2023 AWS Amplify UI. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4376"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "Una plataforma de aprendizaje integrada hecha para estudiantes"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4374"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 738592071"?: PrimitiveOverrideProps<FlexProps>;
    "Transformando la Educaci\u00F3n en Colombia y Am\u00E9rica Latina"?: PrimitiveOverrideProps<TextProps>;
    "KAIROS es m\u00E1s que una plataforma educativa: es un ecosistema integral dise\u00F1ado para abordar algunos de los desaf\u00EDos m\u00E1s urgentes en la educaci\u00F3n actual. Con altas tasas de deserci\u00F3n, acceso limitado a recursos y un bajo rendimiento acad\u00E9mico que afecta a millones en Am\u00E9rica Latina, KAIROS surge como una soluci\u00F3n escalable, inclusiva e innovadora."?: PrimitiveOverrideProps<TextProps>;
    Divider38592074?: PrimitiveOverrideProps<ViewProps>;
    "Frame 738592075"?: PrimitiveOverrideProps<FlexProps>;
    "Nuestra Misi\u00F3n"?: PrimitiveOverrideProps<TextProps>;
    "Proveer una educaci\u00F3n equitativa, inclusiva y de alta calidad para todos. A trav\u00E9s de tecnolog\u00EDa avanzada, m\u00F3dulos de aprendizaje personalizados y pedagog\u00EDa innovadora, KAIROS asegura que ning\u00FAn estudiante quede atr\u00E1s, empoderando a las nuevas generaciones con las herramientas que necesitan para tener \u00E9xito."?: PrimitiveOverrideProps<TextProps>;
    Divider38592078?: PrimitiveOverrideProps<ViewProps>;
    "Frame 738592079"?: PrimitiveOverrideProps<FlexProps>;
    "\u00BFPor qu\u00E9 KAIROS?"?: PrimitiveOverrideProps<TextProps>;
    "Dise\u00F1o Integral: Un ecosistema multifac\u00E9tico basado en los s\u00F3lidos plat\u00F3nicos y una amplia variedad de contenidos curriculares, que ofrece portales personalizados para estudiantes, padres, tutores, instituciones y gobiernos. Acceso Inclusivo: Compatibilidad sin conexi\u00F3n (Estado futuro, contenido imprimible) y recursos f\u00EDsicos que eliminan la brecha digital en \u00E1reas rurales y desatendidas. Herramientas Innovadoras: Un asistente impulsado por inteligencia artificial, \"El Profe\", que permite a los estudiantes identificar \u00E1reas de mejora, tomar notas integradas y pr\u00F3ximamente acceder a juegos interactivos (en exploraci\u00F3n de alianzas). Impacto Escalable: Dise\u00F1ado para ser adaptable y escalable, asegurando el \u00E9xito en diversos contextos educativos en Am\u00E9rica Latina y m\u00E1s all\u00E1."?: PrimitiveOverrideProps<TextProps>;
    "Everything 3"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
