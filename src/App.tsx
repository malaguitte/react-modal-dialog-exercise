import './App.scss'
import { useState } from 'react';
import RegistrationDialog from './components/registration-dialog/RegistrationDialog';

const onCancelClick = () => console.log("Clicked Cancel");
const onOkClick = () => console.log("Clicked OK");

function App() {
  const [isActive, setActive] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setActive(!isActive)}>Show/Hide Dialog</button>
      <RegistrationDialog
        isActive={isActive}
        onHandleCancelClick={onCancelClick}
        onHandleOkClick={onOkClick}
      />
    </div>
  )
}

export default App;
