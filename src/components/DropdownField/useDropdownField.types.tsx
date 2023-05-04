/* eslint-disable */

import { DropdownProps, FieldProps } from "@fluentui/react-components";
import { InfoLabelProps } from "@fluentui/react-components/dist/unstable";

export type DropdownFieldProps = DropdownProps &
   FieldProps &
   InfoLabelProps & {
      name: string;
      label?: string;
      options: DropdownOption[];
   };

export type DropdownOption = {
   label: string;
   value: string;
   disabled?: boolean;
};
