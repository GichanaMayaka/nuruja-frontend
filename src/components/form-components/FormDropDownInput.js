import React from "react";
import { FormControl, MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const FormDropDownInput = ({
  name,
  control,
  label,
  errors,
  dropDownOptions,
  defaultValue,
}) => {
  const generateSingleOptions = () => {
    return dropDownOptions.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };
  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <TextField
            select
            variant="outlined"
            color="secondary"
            focused={value !== undefined}
            onChange={onChange}
            value={value}
            label={label}
            sx={{ mb: 4 }}
            error={!!errors}
            helperText={errors?.message}
          >
            {generateSingleOptions()}
          </TextField>
        )}
      />
    </FormControl>
  );
};

export default FormDropDownInput;
