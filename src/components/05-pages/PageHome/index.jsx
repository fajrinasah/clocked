/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { doClock, getTodayLog } from "../../../store/slices/logs/thunks";
import { setCurrentLogStatus } from "../../../store/slices/logs";

import TitlePage from "../../01-atoms/TitlePage";
import TextCurrentDateTime from "../../01-atoms/TextCurrentDatetime";
import TextCurrentLogStatus from "../../01-atoms/TextCurrentLogStatus";
import TextCurrentShift from "../../01-atoms/TextCurrentShift";
import ButtonClocked from "../../01-atoms/ButtonClocked";

export default function PageHome() {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());

  const { log, currentLogStatus } = useSelector((state) => {
    return state.logs;
  });

  useEffect(() => {
    dispatch(getTodayLog());
  }, []);

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const body = {
    scheduledDate: DateTime.now().toFormat("yyyy-LL-dd"),
    type: currentLogStatus === "out" ? "in" : "out",
    time: DateTime.now().toFormat("hh:mm:ss"),
  };

  const handleClocked = () => {
    dispatch(doClock(body));

    setCurrentLogStatus(currentLogStatus === "out" ? "in" : "out");
  };

  return (
    <div className="page not-full home d-flex-col">
      <TitlePage content="Welcome!" />

      <TextCurrentDateTime
        dateTimeDisplayForDate={DateTime.now().toLocaleString(
          DateTime.DATE_MED_WITH_WEEKDAY
        )}
        dateTimeDisplayForTime={date.toLocaleTimeString()}
        dateTimeForDate={DateTime.now().toFormat("yyyy-LL-dd")}
        dateTimeForTime={date.toLocaleString(DateTime.TIME_24_SIMPLE)}
      />

      <TextCurrentShift
        shiftName={log?.shift?.name}
        shiftStart={log?.shift?.fromTime}
        shiftEnd={log?.shift?.toTime}
      />

      <TextCurrentLogStatus
        logStatus={currentLogStatus ? currentLogStatus : "out"}
      />

      <ButtonClocked
        onClick={handleClocked}
        clockedType={currentLogStatus === "out" ? "in" : "out"}
      />
    </div>
  );
}
