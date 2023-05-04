import {
   useId,
   LabelProps,
   Field,
   Dropdown,
   Option,
} from '@fluentui/react-components';
import { InfoLabel } from '@fluentui/react-components/unstable';
import { ErrorMessage } from 'formik';
import { useDropdownStyles } from './useDropdownField.style';
import { DropdownFieldProps } from './useDropdownField.types';
import { useDropdownField } from './useDropdownField';

export const DropdownField = (props: DropdownFieldProps) => {
   const dropdownId = useId('dropdown');
   const { label, name, info, required, options, ...rest } = props;

   const styles = useDropdownStyles();
   const { hasError, value, selectedOptions, handleOnChange, handleOnBlur } =
      useDropdownField(props);

   return (
      <div className={styles.root}>
         <Field
            {...rest}
            label={
               {
                  children: (_: unknown, props: LabelProps) => (
                     <InfoLabel {...rest} info={info} required={required}>
                        <strong>{label}</strong>
                     </InfoLabel>
                  ),
               } as any
            }
            validationState={hasError ? 'error' : undefined}
            validationMessage={
               hasError ? <ErrorMessage name={name} /> : undefined
            }
            required={required}
         >
            <Dropdown
               {...rest}
               id={dropdownId}
               name={name}
               value={value}
               selectedOptions={selectedOptions}
               onOptionSelect={handleOnChange} 
               onBlur={handleOnBlur} 
            >
               {options.map(option => (
                  <Option
                     key={option.value}
                     value={option.value}
                     disabled={option.disabled}
                  >
                     {option.label}
                  </Option>
               ))}
            </Dropdown>
         </Field>
      </div>
   );
};
