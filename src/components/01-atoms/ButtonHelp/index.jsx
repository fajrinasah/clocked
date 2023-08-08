import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function ButtonHelp({ onClick = () => {} }) {
  return (
    <button type="button" className="button-help" onClick={onClick}>
      <FontAwesomeIcon
        icon={faCircleQuestion}
        size="xl"
        className="question-icon"
        aria-hidden="true"
      />
    </button>
  );
}
