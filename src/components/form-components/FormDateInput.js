import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";

const FormDateInput = ({ name, control, label, errors }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        defaultValue={new Date()}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label={label}
            value={value}
            onChange={onChange}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!errors,
                helperText: errors?.message,
              },
            }}
            sx={{ mb: 4 }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default FormDateInput;
