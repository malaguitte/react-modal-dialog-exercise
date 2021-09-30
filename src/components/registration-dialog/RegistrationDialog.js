import Dialog from "../dialog/Dialog"
import RegistrationForm from "./RegistrationForm";

function RegistrationDialog({ onHandleCancelClick, onHandleOkClick }) {
  return (
    <Dialog
      title="Basic Modal"
      content={<RegistrationForm></RegistrationForm>}
      onHandleCancelClick={onHandleCancelClick}
      onHandleOkClick={onHandleOkClick}
      okButtonLabel="OK"
      cancelButtonLabel="Cancel"   
    >
    </Dialog>
  );
}

export default RegistrationDialog;