import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { Fragment } from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import trLocale from "date-fns/locale/tr";



export default function BasicDateRangePicker(props) {
  const today = new Date();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={trLocale}>
      <DateRangePicker
        startText={props.isActive === 0 ? "Check-in" : "Gidiş Tarihi"}
        endText={props.isActive === 0 ? "Check-out" : "Dönüş(Opsiyonel)"}
        value={props.value}
        minDate={today}
        onChange={( newValue) => props.dateHandler(newValue)}
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
