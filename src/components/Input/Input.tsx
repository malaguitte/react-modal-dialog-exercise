import "./Input.scss"

interface InputProps {
  label: string, 
  type: "text" | "email" | "password",
  onChangeHandler: () => void, 
};

function Input(props: InputProps) {

return (
  <div className="input_holder">
    <label className="input_label">{props.label}</label>
    <input className="input_field" type={props.type ?? "text"} onChange={() => props.onChangeHandler()}></input>
  </div>
  );
}
  
  export default Input;