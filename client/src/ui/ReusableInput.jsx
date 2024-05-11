import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './reusableInput.css';
import Animation from '../utils/Animation';

const ReusableInput = ({
  name,
  label,
  type,
  value,
  readOnly,
  pattern,
  required,
  errorMessage,
  onChange,
  disabled,
  onFormValid,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  let focus;
  focus = isFocus ? 'true' : '';

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleFocus = () => setIsFocus(true);

  useEffect(() => {
    if (onFormValid) onFormValid();
  }, [value, onFormValid]);

  return (
    <Animation type="4">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-colorGrey700"
          htmlFor={label}
        >
          {label}:
        </label>
        <div
          className={` relative flex ${errorMessage ? 'items-start' : 'items-center'}`}
        >
          <div className="flex w-full items-center justify-center rounded border border-colorGrey300 text-colorGrey500 shadow">
            {name === 'phone' && (
              <>
                <span className="fi fi-ng mx-2 "></span>
                <span className="mr-2">+234</span>
              </>
            )}
            <div className="w-full">
              <input
                className={`inputField focus:shadow-outline w-full appearance-none border-l border-colorGrey200 px-3 py-2 leading-tight text-colorGrey700 focus:border-colorGrey500 focus:outline-none
          `}
                type={type === 'password' && showPassword ? 'text' : type}
                id={name}
                focus={focus}
                value={value}
                readOnly={readOnly === undefined ? false : !readOnly}
                onChange={handleChange}
                pattern={pattern}
                required={required}
                onBlur={handleFocus}
                onFocus={() => {
                  (name === 'passwordConfirm' ||
                    name === 'newPasswordConfirm') &&
                    handleFocus();
                }}
                disabled={disabled}
              />

              {isFocus && errorMessage && (
                <span className="errMsg mt-1 flex-grow text-sm text-colorRed700">
                  {errorMessage}
                </span>
              )}
            </div>
          </div>

          {type === 'password' && (
            <button
              className={`absolute right-3 focus:outline-none ${errorMessage ? 'mt-2' : ''}`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
        </div>
      </div>
    </Animation>
  );
};

export default ReusableInput;
