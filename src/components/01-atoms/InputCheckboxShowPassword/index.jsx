import "./styles.css";

export default function InputCheckboxShowPassword({ showClicked, id }) {
  return (
    <div className="checkbox-custom checkbox-show-password d-flex-row">
      <input type="checkbox" name={id} id={id} onChange={showClicked} />
      <label htmlFor="checkbox-show-password">Show</label>
    </div>
  );
}
