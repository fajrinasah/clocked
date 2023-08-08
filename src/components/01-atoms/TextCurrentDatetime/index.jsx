import "./styles.css";

export default function TextCurrentDateTime({
  dateTimeForDate = "",
  dateTimeForTime = "",
  dateTimeDisplayForDate = "",
  dateTimeDisplayForTime = "",
}) {
  return (
    <div className="text current date-time d-flex-col">
      <time id="currentDate" dateTime={dateTimeForDate}>
        {dateTimeDisplayForDate}
      </time>
      <time id="currentTime" dateTime={dateTimeForTime}>
        {dateTimeDisplayForTime}
      </time>
    </div>
  );
}
