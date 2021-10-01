import Layer from "../layer/Layer";
import Button from "../button/Button"
import "./Dialog.scss"

interface DialogProps {
  isActive: boolean,
  title: string, 
  content: React.ReactNode, 
  onHandleCancelClick: () => void, 
  onHandleOkClick: () => void,
  onHandleCloseClick: () => void,
  cancelButtonLabel?: string, 
  okButtonLabel?: string 
};

function Dialog(props: DialogProps) {
  return (
    <Layer isActive={props.isActive}>
      <div className="dialog">
        <button className="dialog_close_button" onClick={() => props.onHandleCloseClick()}></button>
        <h2 className="dialog_title">{props.title}</h2>
        <div className="dialog_content">{props.content}</div>
        <div className="dialog_actions_holder">
          <Button onClickHandler={props.onHandleCancelClick} theme="secondary">{props.cancelButtonLabel ?? "cancel"}</Button>
          <Button onClickHandler={props.onHandleOkClick} theme="primary">{props.okButtonLabel ?? "ok"}</Button>
        </div>
      </div>
    </Layer>
  );
}

export default Dialog;