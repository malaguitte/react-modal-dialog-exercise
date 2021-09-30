import Layer from "../layer/Layer";
import "./Dialog.scss"

interface DialogProps {
  title: string, 
  content: React.ReactNode, 
  onHandleCancelClick: () => void, 
  onHandleOkClick: () => void, 
  cancelButtonLabel?: string, 
  okButtonLabel?: string 
};

function Dialog(props: DialogProps) {
  return (
    <Layer>
      <div className="dialog">
        <h2 className="title">{props.title}</h2>
          <div className="content">{props.content}</div>
          <button className="cancelButton" onClick={props.onHandleCancelClick}>{props?.cancelButtonLabel ?? "cancel"}</button>
          <button className="okButton" onClick={props.onHandleOkClick}>{props?.okButtonLabel ?? "ok"}</button>
      </div>
    </Layer>
  );
}

export default Dialog;