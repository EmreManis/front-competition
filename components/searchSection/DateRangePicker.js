import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import trLocale from "date-fns/locale/tr";



export default function BasicDateRangePicker() {
  const [value, setValue] = useState([null, null]);
  const today = new Date();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={trLocale}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        minDate={today}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <Fragment>
            <TextField
              {...startProps}
              variant="standard"
              sx={{ mx: 2 }}
              InputProps={{ disableUnderline: true, style: { color: "#6F7E90", fontFamily:"Poppins", fontWeight: 500, fontSize: 14 } }}
              InputLabelProps={{ style: { color: "#6F7E90", fontFamily:"Poppins", fontWeight: 400, fontSize: 14 } }}
            />

            <TextField
              {...endProps}
              variant="standard"
              InputProps={{ disableUnderline: true, style: { color: "#6F7E90", fontFamily:"Poppins", fontWeight: 500, fontSize: 14 } }}
              InputLabelProps={{ style: { color: "#6F7E90", fontFamily:"Poppins", fontWeight: 400, fontSize: 14 } }}
            />
          </Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
