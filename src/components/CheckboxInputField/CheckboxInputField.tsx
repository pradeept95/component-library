import * as React from "react";
import { useId, LabelProps, Checkbox} from "@fluentui/react-components";
import { Field, InfoLabel } from "@fluentui/react-components/unstable";
import { ErrorMessage } from 'formik';
import { useOptionStyles, useStyles } from "./Styles";
import { CheckboxInputFieldProps } from "./Types";
import { useCheckboxInputField } from "./useCheckboxInputField";

export const CheckboxInputField = ({ label, name, required, layout, options, enableSelectAll, labelPosition, ...props }: CheckboxInputFieldProps) => {
    const labelId = useId("radio-input");
    const styles = useStyles();
    const optionStyles = useOptionStyles();

    const {
        helpers,
        hasError,
        handleOnChange,
        handleOnBlur,
        isChecked,
        isCheckedAll,
    } = useCheckboxInputField({ label, name, required, layout, options, enableSelectAll, labelPosition, ...props });

    return (
        <div className={styles.root}>
            <Field
                {...props}
                label={{
                    children: (_: unknown, props: LabelProps) => (
                        <InfoLabel {...props} id={labelId}>
                            <strong>{label}</strong>
                        </InfoLabel>
                    ),
                } as any}
                validationState={hasError ? "error" : undefined}
                validationMessage={hasError ? <ErrorMessage name={name} /> : undefined}
                required={required}
                onBlur={handleOnBlur}
            >
                <div className={layout == "vertical" ? optionStyles.root : undefined}>
                    {enableSelectAll ? <Checkbox
                        checked={isCheckedAll()}
                        onChange={(_ev, data) => {
                            if (data.checked === true) {
                                helpers.setValue(options);
                            } else {
                                helpers.setValue([]);
                            }
                        }}
                        label="Select All"
                        labelPosition={labelPosition}
                    /> : <> </>}
                    {
                        (options || []).map((option, index) => (
                            <Checkbox
                                {...option}
                                key={index}
                                checked={isChecked(option)}
                                onChange={(ev, data) => handleOnChange(null, data, option)}
                                labelPosition={labelPosition}
                            />
                        ))
                    }
                </div>
            </Field>
        </div>
    );
};


