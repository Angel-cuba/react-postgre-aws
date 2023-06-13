/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Images } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImagesUpdateFormInputValues = {
    name?: string;
    url?: string;
};
export declare type ImagesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImagesUpdateFormOverridesProps = {
    ImagesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ImagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ImagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    images?: Images;
    onSubmit?: (fields: ImagesUpdateFormInputValues) => ImagesUpdateFormInputValues;
    onSuccess?: (fields: ImagesUpdateFormInputValues) => void;
    onError?: (fields: ImagesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImagesUpdateFormInputValues) => ImagesUpdateFormInputValues;
    onValidate?: ImagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ImagesUpdateForm(props: ImagesUpdateFormProps): React.ReactElement;
