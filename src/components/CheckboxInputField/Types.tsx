import { CheckboxProps, RadioGroupProps } from "@fluentui/react-components";
import { FieldProps, InfoLabelProps } from "@fluentui/react-components/dist/unstable";


export type CheckboxOption = CheckboxProps & {
    meta?: any; 
};

export type CheckboxInputFieldProps = RadioGroupProps & FieldProps & InfoLabelProps & {
    name: string;
    label?: string;
    options?: CheckboxOption[];
    enableSelectAll?: boolean;
    labelPosition?: "before" | "after";
    layout ?: "horizontal" | "vertical";
};