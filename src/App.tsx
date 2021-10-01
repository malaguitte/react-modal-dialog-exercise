import './App.scss'
import { useState } from 'react';
import RegistrationDialog from './components/registration-dialog/RegistrationDialog';
import { dragElement } from "./utils/Drag";

const TEST_BUTTON_LABEL = "Show/Hide Dialog";
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
      <button onClick={() => setActive(!isActive)}>{TEST_BUTTON_LABEL}</button>
      <RegistrationDialog
        isActive={isActive}
        onHandleCancelClick={onCancelClick}
        onHandleOkClick={onOkClick}
      />
    </div>
  )
}

export default App;
