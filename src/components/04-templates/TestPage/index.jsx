// buttons
import ButtonClocked from "../../01-atoms/ButtonClocked";
import ButtonHelp from "../../01-atoms/ButtonHelp";
import ButtonStandard from "../../01-atoms/ButtonStandard";

// form inputs
import InputCheckboxShowPassword from "../../01-atoms/InputCheckboxShowPassword";
import InputConfirmPassword from "../../01-atoms/InputConfirmPassword";
import InputDate from "../../01-atoms/InputDate";
import InputEmail from "../../01-atoms/InputEmail";
import InputMonth from "../../01-atoms/InputMonth";
import InputNumber from "../../01-atoms/InputNumber";
import InputPassword from "../../01-atoms/InputPassword";
import InputSelect from "../../01-atoms/InputSelect";
import InputSubmit from "../../01-atoms/InputSubmit";
import InputText from "../../01-atoms/InputText";
import InputTime from "../../01-atoms/InputTime";

import ModalDefaultText from "../../01-atoms/ModalDefaultText";
import NavLinkForHeader from "../../01-atoms/NavLinkForHeader";
import TextCurrentDateTime from "../../01-atoms/TextCurrentDatetime";
import TextCurrentLogStatus from "../../01-atoms/TextCurrentLogStatus";
import TextCurrentShift from "../../01-atoms/TextCurrentShift";
import TitlePage from "../../01-atoms/TitlePage";
import ToolbarInputSelect from "../../01-atoms/ToolbarInputSelect";
import ToolbarInputSort from "../../01-atoms/ToolbarInputSort";

import "./styles.css";

export default function TestPage() {
  const shifts = [
    { id: 1, name: "Morning Shift", selected: false },
    { id: 2, name: "Afternoon Shift", selected: false },
    { id: 3, name: "Evening Shift", selected: false },
  ];

  const sortingOptions = [
    { id: "date", name: "Date", selected: false },
    { id: "deduction", name: "Deduction", selected: false },
  ];

  return (
    <div id="test-page">
      <ButtonClocked clockedType="Clock Out" />
      <br />
      <br />
      <ButtonHelp />
      <br />
      <br />
      <ButtonStandard
        story="raised-warning"
        bold="bold"
        width="auto"
        content="Button"
      />

      <br />
      <br />
      <InputCheckboxShowPassword />
      <br />
      <br />
      <InputConfirmPassword labelText="Confirm" />
      <br />
      <br />
      <InputDate labelText="Date" />
      <br />
      <br />
      <InputEmail labelText="Email" />
      <br />
      <br />
      <InputMonth labelText="Month" />
      <br />
      <br />
      <InputNumber labelText="Amount" />
      <br />
      <br />
      <InputPassword labelText="Password" />
      <br />
      <br />
      <InputSelect labelText="Shift" />
      <br />
      <br />
      <InputSubmit value="Submit" story="ghost-accent" width="full" />
      <br />
      <br />
      <InputText labelText="Full name" />
      <br />
      <br />
      <InputTime labelText="Start" />
      <br />
      <br />
      <ModalDefaultText type="toast" content="notification" />
      <br />
      <br />
      <NavLinkForHeader content="Add Employee" />
      <br />
      <br />
      <TextCurrentDateTime
        dateTimeDisplayForDate="Tuesday, August 8th 2023"
        dateTimeDisplayForTime="16:00"
        dateTimeForDate="2023-08-08"
        dateTimeForTime="16:00:00"
      />
      <br />
      <br />
      <TextCurrentShift
        shiftName="Afternoon Shift"
        shiftStart="12:00"
        shiftEnd="17:00"
      />
      <br />
      <br />
      <TextCurrentLogStatus logStatus="clocked in" />
      <br />
      <br />
      <TitlePage content="Add Employee" />
      <br />
      <br />
      <div className="bg-accent">
        <ToolbarInputSelect label="Shift" options={shifts} />
        <br />
        <br />
        <ToolbarInputSort
          label="Sort by"
          options={sortingOptions}
          currentSortingMethod="ASC"
        />
      </div>
      <br />
      <br />
    </div>
  );
}
