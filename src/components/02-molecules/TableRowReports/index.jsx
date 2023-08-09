import "./styles.css";

export default function TableRowReports({
  type = "bodyrow", // "bodyrow-light", "bodyrow-dark", "headrow",
  key,
  period,
  baseAmount,
  totalDeduction,
  totalAmount,
}) {
  if (type === "headrow") {
    return (
      <tr className={`reports ${type} d-flex-row`} key={key}>
        <td className="period">Period</td>
        <td className="base-amount">Base Amount</td>
        <td className="total-deduction">Total Deduction</td>
        <td className="total-amount">Total Amount</td>
      </tr>
    );
  } else {
    return (
      <tr className={`reports ${type} d-flex-row`} key={key}>
        <td className="period">{period}</td>
        <td className="base-amount">{baseAmount}</td>
        <td className="total-deduction">{totalDeduction}</td>
        <td className="total-amount">{totalAmount}</td>
      </tr>
    );
  }
}
