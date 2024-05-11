import { H3 } from './Headings';

const ReusableDropdownInput = ({
  label,
  options,
  value,
  onChange,
  required,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <select
        id={label}
        value={value}
        onChange={handleChange}
        required={required}
        className="my-2 block w-full cursor-pointer border p-2 outline-none hover:border-colorBrand2 focus:border-colorBrand2"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ReusableDropdownInput;
