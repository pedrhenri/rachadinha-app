/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Grupo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GrupoUpdateFormInputValues = {};
export declare type GrupoUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GrupoUpdateFormOverridesProps = {
    GrupoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type GrupoUpdateFormProps = React.PropsWithChildren<{
    overrides?: GrupoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    grupo?: Grupo;
    onSubmit?: (fields: GrupoUpdateFormInputValues) => GrupoUpdateFormInputValues;
    onSuccess?: (fields: GrupoUpdateFormInputValues) => void;
    onError?: (fields: GrupoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GrupoUpdateFormInputValues) => GrupoUpdateFormInputValues;
    onValidate?: GrupoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GrupoUpdateForm(props: GrupoUpdateFormProps): React.ReactElement;
