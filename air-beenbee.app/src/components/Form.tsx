import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';

interface Option {
  value: string | number;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'password';
  options?: Option[];
}

interface DynamicFormProps {
  formStructure: FormField[];
  label: string;
  onSubmit: (formData: { [key: string]: any }) => void;
}

const renderFormField = (
  field: FormField,
  index: number,
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | SelectChangeEvent<HTMLInputElement>) => void,
  values: { [key: string]: any }
) => {
  switch (field.type) {
    case 'text':
    case 'number':
      return (
        <TextField
          color="warning"
          key={index}
          name={field.name}
          label={field.label}
          type={field.type}
          value={values[field.name] || ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      );
    case 'select':
      return (
        <FormControl key={index} variant="outlined" margin="normal" fullWidth>
          <InputLabel>{field.label}</InputLabel>
          <Select
            color="warning"
            name={field.name}
            value={values[field.name] || ''}
            onChange={(e: SelectChangeEvent<HTMLInputElement>) => handleChange(e)}
            label={field.label}
          >
            {field.options?.map((option, i) => (
              <MenuItem key={i} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case 'password':
      return (
        <TextField
          color="warning"
          key={index}
          name={field.name}
          label={field.label}
          type="password"
          value={values[field.name] || ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      );
    default:
      return null;
  }
};

export const Form: React.FC<DynamicFormProps> = ({ formStructure, label, onSubmit }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement> | SelectChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form 
    className="flex flex-col space-y-4 backdrop-blur-sm bg-white/30 p-4 rounded-lg shadow-lg w-max"
    onSubmit={handleSubmit}>
      {formStructure.map((field, index) => renderFormField(field, index, handleChange, formValues))}
      <Button type="submit" variant="contained" color="warning">
        {label}
      </Button>
    </form>
  );
};

