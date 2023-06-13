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
export declare type ImagesCreateFormInputValues = {
    name?: string;
    url?: string;
};
export declare type ImagesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImagesCreateFormOverridesProps = {
    ImagesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ImagesCreateFormProps = React.PropsWithChildren<{
    overrides?: ImagesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ImagesCreateFormInputValues) => ImagesCreateFormInputValues;
    onSuccess?: (fields: ImagesCreateFormInputValues) => void;
    onError?: (fields: ImagesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImagesCreateFormInputValues) => ImagesCreateFormInputValues;
    onValidate?: ImagesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ImagesCreateForm(props: ImagesCreateFormProps): React.ReactElement;
