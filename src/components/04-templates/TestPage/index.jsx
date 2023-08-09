import { useState } from "react";

import FormAccountActivation from "../../02-molecules/FormAccountActivation";
import FormAddEmployee from "../../02-molecules/FormAddEmployee";
import FormAddShift from "../../02-molecules/FormAddShift";
import FormLogin from "../../02-molecules/FormLogin";
import FormSetSalary from "../../02-molecules/FormSetSalary";
import FormSetShift from "../../02-molecules/FormSetShift";
import FormVerifyOtp from "../../02-molecules/FormVerifyOtp";
import Pagination from "../../02-molecules/Pagination";

import TableRowLogs from "../../02-molecules/TableRowLogs";
import TableRowReports from "../../02-molecules/TableRowReports";

import ToolbarsLogs from "../../02-molecules/ToolbarsLogs";
import ToolbarsReports from "../../02-molecules/ToolbarsReports";

import Header from "../../03-organisms/Header";
import ModalConfirmation from "../../03-organisms/ModalConfirmation";

import "./styles.css";

export default function TestPage() {
  const [currentFilteringOption, setCurrentFilteringOption] = useState("month");

  const shifts = [
    { id: 1, name: "Morning Shift", selected: false },
    { id: 2, name: "Afternoon Shift", selected: false },
    { id: 3, name: "Evening Shift", selected: false },
  ];

  const sortingOptions = [
    { id: "date", name: "Date", selected: false },
    { id: "total", name: "Total", selected: false },
  ];

  const positions = [
    { id: 1, name: "Baker" },
    { id: 2, name: "Cashier" },
    { id: 3, name: "Tea Sommelier" },
  ];

  const employees = [
    { id: "kory.vincelette@allfreemail.net", name: "Kory Vincelette" },
    { id: "millicent.calandra@allfreemail.net", name: "Millicent Calandra" },
  ];

  const filteringOptions = [
    {
      id: "month",
      name: "Month",
      selected: currentFilteringOption === "month",
    },
    {
      id: "year",
      name: "Last year",
      selected: currentFilteringOption === "year",
    },
  ];

  const handleFilteringOption = () => {
    if (currentFilteringOption === "month") {
      setCurrentFilteringOption("year");
    } else {
      setCurrentFilteringOption("month");
    }
  };

  return (
    <div id="test-page">
      <br />
      <br />
      <ModalConfirmation type="standard" />
      {/* <Header fullName="Vanilla Bethaiume" roleId={1} /> */}
      {/* <FormAccountActivation /> */}
      {/* <FormAddEmployee positionsArr={positions} /> */}
      {/* <FormAddShift /> */}
      {/* <FormLogin /> */}
      {/* <FormSetSalary employeesArr={employees} /> */}
      {/* <FormSetShift employeesArr={employees} shiftsArr={shifts} /> */}
      {/* <FormVerifyOtp /> */}
      {/* <Pagination totalPage="3" /> */}
      {/* <TableRowLogs type="headrow" />
      <TableRowLogs
        type="bodyrow-light"
        scheduledDate="2023-08-07"
        shiftName="Morning Shift"
        shiftStart="07:00"
        shiftEnd="12:00"
        clockedIn="08:46"
        clockedOut="12:01"
        salaryDeduction="0"
      />
      <TableRowLogs
        type="bodyrow-dark"
        scheduledDate="2023-08-07"
        shiftName="Morning Shift"
        shiftStart="07:00"
        shiftEnd="12:00"
        clockedIn="08:46"
        clockedOut="12:01"
        salaryDeduction="0"
      /> */}

      {/* <TableRowReports type="headrow" />
      <TableRowReports
        type="bodyrow-light"
        period="2023-06"
        baseAmount="6600000"
        totalDeduction="450000"
        totalAmount="5750000"
      />
      <TableRowReports
        type="bodyrow-dark"
        period="2023-06"
        baseAmount="6600000"
        totalDeduction="450000"
        totalAmount="5750000"
      /> */}

      {/* <ToolbarsLogs
        sortingOptions={sortingOptions}
        currentSortingMethod="ASC"
      /> */}

      {/* <ToolbarsReports
        sortingOptions={sortingOptions}
        filteringOptions={filteringOptions}
        currentSortingMethod="ASC"
        handleFilteringOption={handleFilteringOption}
        currentFilteringOption={currentFilteringOption}
      /> */}
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />

      <br />
      <br />

      <br />
      <br />

      <br />
      <br />

      <br />
      <br />

      <br />
      <br />
    </div>
  );
}
