/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomButtonOverridesProps = {
    CustomButton?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon36732725"?: PrimitiveOverrideProps<IconProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon36732727"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CustomButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "Default" | "Hover";
} & {
    overrides?: CustomButtonOverridesProps | undefined | null;
}>;
export default function CustomButton(props: CustomButtonProps): React.ReactElement;
