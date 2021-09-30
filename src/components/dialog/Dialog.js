import Layer from "../layer/Layer";

function Dialog({ 
    title, 
    content, 
    onHandleCancelClick, 
    onHandleOkClick, 
    cancelButtonLabel = "cancel", 
    okButtonLabel = "ok" 
  }) {
  return (
    <Layer>
      <div className="dialog">
        <h2 className="title">{title}</h2>
          <div className="content">{content}</div>
          <button className="cancelButton" onClick={onHandleCancelClick}>{cancelButtonLabel}</button>
          <button className="okButton" onClick={onHandleOkClick}>{okButtonLabel}</button>
      </div>
    </Layer>
  );
}

export default Dialog;