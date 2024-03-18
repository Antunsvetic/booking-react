import moment from 'moment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const DatePickerInput = ({
  label,
  value,
  onChange,
  disablePast=false,
  shouldDisableDate,
  minDate=null,
  maxDate=null,
  resetState,
  disabled=false
}) => {
  const formatedDate = value ? moment(value, "DD/MM/YYYY") : null;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          views={['year', 'month', 'day']}
          formatedDate="DD/MM/YYYY"
          label={label}
          value={formatedDate}
          disablePast={disablePast}
          shouldDisableDate={shouldDisableDate}
          minDate={minDate}
          maxDate={maxDate}
          onChange={onChange}
          disabled={disabled}
          sx={{ width: 260 }}
          slotProps={{
            field: { clearable: true, onClear: () => resetState() },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DatePickerInput;