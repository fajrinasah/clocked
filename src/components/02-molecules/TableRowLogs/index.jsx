import "./styles.css";

export default function TableRowLogs({
  type = "bodyrow", // "bodyrow-light", "bodyrow-dark", "headrow",
  key,
  scheduledDate,
  shiftName,
  shiftStart,
  shiftEnd,
  clockedIn,
  clockedOut,
  salaryDeduction,
}) {
  if (type === "headrow") {
    return (
      <tr className={`logs ${type} d-flex-row`} key={key}>
        <td className="date">Scheduled Date</td>
        <td className="shift-name">Shift</td>
        <td className="shift-start">Start</td>
        <td className="shift-end">End</td>
        <td className="clocked-in">In</td>
        <td className="clocked-out">Out</td>
        <td className="deduction">Deduction</td>
      </tr>
    );
  } else {
    return (
      <tr className={`logs ${type} d-flex-row`} key={key}>
        <td className="date">{scheduledDate}</td>
        <td className="shift-name">{shiftName}</td>
        <td className="shift-start">{shiftStart}</td>
        <td className="shift-end">{shiftEnd}</td>
        <td className="clocked-in">{clockedIn}</td>
        <td className="clocked-out">{clockedOut}</td>
        <td className="deduction">{salaryDeduction}</td>
      </tr>
    );
  }
}
