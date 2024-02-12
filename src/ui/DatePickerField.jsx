import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700">{label}</label>
      <DatePicker
        value={date}
        onChange={setDate}
        inputClass="textField__input"
        containerClassName="w-full"
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
      />
    </div>
  );
}

export default DatePickerField;
