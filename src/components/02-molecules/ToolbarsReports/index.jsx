import { DateTime } from "luxon";

import ToolbarInputSelect from "../../01-atoms/ToolbarInputSelect";
import InputMonth from "../../01-atoms/InputMonth";
import InputRadioSort from "../../01-atoms/InputRadioSort";
import ButtonStandard from "../../01-atoms/ButtonStandard";

export default function ToolbarsReports({
  filteringOptions = [{ id: "", name: "", selected: false }],
  sortingOptions = [{ id: "", name: "", selected: false }],
  refFilteringOption,
  refPeriod,
  refSortingOption,
  handleFilteringOption = () => {},
  currentFilteringOption,
  handlePeriodFiltering = () => {},
  currentPeriodFiltering,
  setCurrentSortingMethod = () => {},
  currentSortingMethod,
  handleSortingOption = () => {},
  onSubmit = () => {},
  onReset = () => {},
}) {
  return (
    <form className="toolbars reports d-flex-col">
      <ToolbarInputSelect
        color="main"
        inputId="filtering-option"
        labelText="Filter by"
        ref={refFilteringOption}
        optionsArray={filteringOptions}
        onChange={handleFilteringOption}
      />

      {currentFilteringOption === "month" && (
        <InputMonth
          color="main"
          inputId="logs-period"
          labelText="Period"
          required={true}
          inputName="logs-period"
          defaultValue={currentPeriodFiltering}
          min={DateTime.now().minus({ years: 1 }).toFormat("yyyy-LL")}
          max={DateTime.now().toFormat("yyyy-LL")}
          ref={refPeriod}
          onChange={handlePeriodFiltering}
        />
      )}

      <ToolbarInputSelect
        color="main"
        inputId="sorting-option"
        labelText="Sort by"
        ref={refSortingOption}
        optionsArray={sortingOptions}
        onChange={handleSortingOption}
      />

      <InputRadioSort
        currentSortingMethod={currentSortingMethod}
        setCurrentSortingMethod={setCurrentSortingMethod}
      />

      <ButtonStandard
        id="button-show-results"
        story="ghost-main"
        width="full"
        content="Show"
        bold=""
        onClick={onSubmit}
      />

      <ButtonStandard
        story="flat"
        width="full"
        content="Reset"
        bold=""
        onClick={onReset}
      />
    </form>
  );
}
