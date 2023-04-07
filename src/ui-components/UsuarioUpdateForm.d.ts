/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Usuario } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuarioUpdateFormInputValues = {
    nome?: string;
    email?: string;
};
export declare type UsuarioUpdateFormValidationValues = {
    nome?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuarioUpdateFormOverridesProps = {
    UsuarioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuarioUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsuarioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usuario?: Usuario;
    onSubmit?: (fields: UsuarioUpdateFormInputValues) => UsuarioUpdateFormInputValues;
    onSuccess?: (fields: UsuarioUpdateFormInputValues) => void;
    onError?: (fields: UsuarioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuarioUpdateFormInputValues) => UsuarioUpdateFormInputValues;
    onValidate?: UsuarioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsuarioUpdateForm(props: UsuarioUpdateFormProps): React.ReactElement;
