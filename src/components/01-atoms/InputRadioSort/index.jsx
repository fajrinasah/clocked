import "./styles.css";

export default function InputRadioSort({
  currentSortingMethod,
  setCurrentSortingMethod = () => {},
}) {
  return (
    <div className="input-radio-sort radios-container d-flex-row">
      <div className="radio-container d-flex-row">
        <label htmlFor="sortAsc">ASC</label>
        <input
          type="radio"
          name="sortingMethod"
          id="sortAsc"
          checked={currentSortingMethod === "ASC"}
          value="ASC"
          onChange={() => setCurrentSortingMethod("ASC")}
        />
      </div>
      <div className="radio-container d-flex-row">
        <label htmlFor="sortDesc">DESC</label>
        <input
          type="radio"
          name="sortingMethod"
          id="sortDesc"
          checked={currentSortingMethod === "DESC"}
          value="DESC"
          onChange={() => setCurrentSortingMethod("DESC")}
        />
      </div>
    </div>
  );
}
