import Dialog from "../dialog/Dialog"
import RegistrationForm from "./RegistrationForm";

interface RegistrationDialogProps {
  isActive: boolean,
  onHandleCancelClick: () => void,
  onHandleOkClick: () => void
};

function RegistrationDialog(props: RegistrationDialogProps) {
  return (
    <Dialog
      isActive={props.isActive}
      title="Basic Modal"
      content={<RegistrationForm/>}
      onHandleCancelClick={props.onHandleCancelClick}
      onHandleOkClick={props.onHandleOkClick}
      okButtonLabel="OK"
      cancelButtonLabel="Cancel"
    />
  );
}

export default RegistrationDialog;