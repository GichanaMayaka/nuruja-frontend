import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FormTextInput = ({ name, control, label, errors, inputType, rules }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <TextField
          type={inputType}
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ mb: 4 }}
          onChange={(e) => {
            {
              inputType === "number"
                ? onChange(e.target.valueAsNumber)
                : onChange(e);
            }
          }}
          value={value}
          label={label}
          error={!!errors}
          helperText={errors?.message}
          focused={value !== ""}
        />
      )}
    />
  );
};

export default FormTextInput;
