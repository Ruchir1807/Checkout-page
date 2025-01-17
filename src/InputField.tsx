import React from "react";
import "./App.css";
import "./index.css";
interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 shadow-sm ${className}`} // Add className for dynamic styling
      />
    </div>
  );
};

export default InputField;
