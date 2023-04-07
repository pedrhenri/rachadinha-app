/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconsProps } from "./Icons";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BottomButtonOverridesProps = {
    BottomButton?: PrimitiveOverrideProps<FlexProps>;
    "Frame 11"?: PrimitiveOverrideProps<FlexProps>;
    Icons?: IconsProps;
    H5?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type BottomButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    variant?: "Default";
} & {
    overrides?: BottomButtonOverridesProps | undefined | null;
}>;
export default function BottomButton(props: BottomButtonProps): React.ReactElement;
