import "./styles.css";

export default function TextCurrentLogStatus({ logStatus = "" }) {
  return (
    <div className="text current log-status d-flex-col">
      <p>Current status:</p>
      <p id="current-log-status">clocked {logStatus}</p>
    </div>
  );
}
