/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GrupoCreateFormInputValues = {};
export declare type GrupoCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GrupoCreateFormOverridesProps = {
    GrupoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type GrupoCreateFormProps = React.PropsWithChildren<{
    overrides?: GrupoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GrupoCreateFormInputValues) => GrupoCreateFormInputValues;
    onSuccess?: (fields: GrupoCreateFormInputValues) => void;
    onError?: (fields: GrupoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GrupoCreateFormInputValues) => GrupoCreateFormInputValues;
    onValidate?: GrupoCreateFormValidationValues;
} & React.CSSProperties>;
export default function GrupoCreateForm(props: GrupoCreateFormProps): React.ReactElement;
