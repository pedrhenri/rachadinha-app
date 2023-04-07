/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuarioCreateFormInputValues = {
    nome?: string;
    email?: string;
};
export declare type UsuarioCreateFormValidationValues = {
    nome?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioCreateFormOverridesProps = {
    UsuarioCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioCreateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsuarioCreateFormInputValues) => UsuarioCreateFormInputValues;
    onSuccess?: (fields: UsuarioCreateFormInputValues) => void;
    onError?: (fields: UsuarioCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuarioCreateFormInputValues) => UsuarioCreateFormInputValues;
    onValidate?: UsuarioCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioCreateForm(props: UsuarioCreateFormProps): React.ReactElement;
