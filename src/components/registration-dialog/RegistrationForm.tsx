import Input from "../input/Input";
import "./RegistrationForm.scss"

function RegistrationForm() {
  return(
    <div className="registration_form">
      <h1 className="registration_form_title">Start your free trial</h1>
      <Input label="Company Name" type="text" onChangeHandler={() => console.log("changed company name...")} />
      <Input label="Your name" type="text" onChangeHandler={() => console.log("changed your name...")} />
      <Input label="Work email" type="email" onChangeHandler={() => console.log("changed work email...")} />
      <Input label="Password" type="password" onChangeHandler={() => console.log("changed password...")} />
    </div>
  );
}

export default RegistrationForm;