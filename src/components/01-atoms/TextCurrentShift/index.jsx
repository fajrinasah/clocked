import "./styles.css";

export default function TextCurrentShift({
  shiftName = "",
  shiftStart = "",
  shiftEnd = "",
}) {
  return (
    <div className="text current shift d-flex-col">
      <p id="current-shift-name">{shiftName}</p>
      <p id="current-shift-period">
        {shiftStart}&ndash;{shiftEnd}
      </p>
    </div>
  );
}
