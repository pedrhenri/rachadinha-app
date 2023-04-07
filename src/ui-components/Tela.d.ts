/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TelaOverridesProps = {
    Tela?: PrimitiveOverrideProps<FlexProps>;
    "Nova Rachadinha"?: PrimitiveOverrideProps<TextProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    TextField36883923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36874043?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TelaProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TelaOverridesProps | undefined | null;
}>;
export default function Tela(props: TelaProps): React.ReactElement;
