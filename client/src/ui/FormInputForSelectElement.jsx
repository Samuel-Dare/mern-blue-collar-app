import './formInput.css';

function FormInputForSelectElement(props) {
  const { label, options, onChange, ...others } = props;

  return (
    <div>
      <label htmlFor="label" className="inputLabel">
        {label}
      </label>
      <select className="inputField" onChange={onChange} {...others}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
export default FormInputForSelectElement;
