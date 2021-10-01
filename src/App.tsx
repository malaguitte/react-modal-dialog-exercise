import "./App.scss";
import { useState } from "react";
import RegistrationDialog from "./components/RegistrationDialog/RegistrationDialog";
import { dragElement } from "./utils/Drag";
import Button from "./components/Button/Button";

const SHOW_DIALOG_BUTTON_LABEL = "Show Dialog";
const onCancelClick = () => console.log("Clicked Cancel");
const onOkClick = () => console.log("Clicked OK");

function App() {
  const [isActive, setActive] = useState(false);

  // This makes the layer element draggable.
  const layerElement = document.getElementById("layer_content");
  if (layerElement) {
    dragElement(layerElement);
  }

  return (
    <div className="App">
      <div className="show_dialog_button">
        <Button theme="secondary" onClickHandler={() => setActive(true)}>{SHOW_DIALOG_BUTTON_LABEL}</Button>
      </div>
      <RegistrationDialog
        isActive={isActive}
        onHandleCancelClick={onCancelClick}
        onHandleOkClick={onOkClick}
        onHandleCloseClick={() => setActive(false)}
      />
    </div>
  )
}

export default App;
