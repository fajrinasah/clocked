import ButtonStandard from "../../01-atoms/ButtonStandard";
import "./styles.css";

export default function ModalConfirmation({
  type = "warning", // "warning" and "standard"
  confirmationContent = "do some action",
  confirmationDetails = "Some action details",
  actionName = "Action",
  cancelHandler = () => {},
  confirmHandler = () => {},
}) {
  return (
    <section className="modal confirmation d-flex-col">
      <h4>Are you sure you want to {confirmationContent}?</h4>
      <p>
        <em>{confirmationDetails}</em>
      </p>

      <div className="buttons-container d-flex-col">
        <ButtonStandard
          story={type === "warning" ? "raised-warning" : "raised-accent"}
          bold={type === "warning" ? "bold" : ""}
          width="full"
          content={actionName}
          onClick={confirmHandler}
        />

        <ButtonStandard
          story="flat"
          bold=""
          width="full"
          content="Cancel"
          onClick={cancelHandler}
          id="button-cancel-modal-confirmation"
        />
      </div>
    </section>
  );
}
