import * as React from "react";
import {
  makeStyles,
  shorthands,
  useId,
  Input,
  InputProps,
  LabelProps,
  FieldProps,
  Field
} from "@fluentui/react-components";
import type { InfoLabelProps } from "@fluentui/react-components/unstable";
import { InfoLabel } from "@fluentui/react-components/unstable";
import { useField, ErrorMessage} from 'formik';


const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    rowGap: "2px", 

    // add 4px margin to the top of the field
    marginTop : "4px",
  },
});

type InputFieldProps = InputProps & FieldProps & InfoLabelProps & {
  name: string;
  label?: string; 
};

export const InputField = ({ label, name, info, required, onBlur, ...props }: InputFieldProps) => {
  const inputId = useId("input");
  const styles = useStyles();

  const [field, meta, helpers] = useField(name); 
  const hasError = React.useMemo(() => meta.touched && meta.error, [meta.touched, meta.error]);

  const handleOnChange: InputProps["onChange"] = (ev, data) => {
    helpers.setValue(data.value);
  };
  const handleOnBlur: InputProps["onBlur"] = () => {
    helpers.setTouched(true, true);
  };

  return (
    <div className={styles.root}>
      <Field 
        {...props}
        label={{
          children: (_: unknown, props: LabelProps) => (
            <InfoLabel {...props} info={info}>
              <strong>{label}</strong>
            </InfoLabel>
          ),
        } as any} 
        validationState={hasError ? "error" : undefined}
        validationMessage= {hasError ? <ErrorMessage name={name} /> : undefined}
        required={required}
      >
        <Input 
          name={name} 
          value={meta.value ?? ""} 
          onChange={handleOnChange} 
          id={inputId} 
          onBlur={handleOnBlur} 
          {...props} /> 
      </Field>
    </div>
  );
};


