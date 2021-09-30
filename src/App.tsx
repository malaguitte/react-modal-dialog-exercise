import './App.scss'
import RegistrationDialog from './components/registration-dialog/RegistrationDialog';

function App() {
  return (
    <div className="App">
      <RegistrationDialog
        onHandleCancelClick={() => console.log("cancel")}
        onHandleOkClick={() => console.log("ok")}
      />
    </div>
  )
}

export default App;
