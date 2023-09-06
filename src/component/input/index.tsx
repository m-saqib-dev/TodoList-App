import React, { ChangeEvent } from 'react';

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  placeholder?: string;
  error?: string | null;
}

const Input: React.FC<InputProps> = ({ onChange, type = 'text', value, placeholder, error, ...restProps }) => {
  return (
    <div className="mb-2">
      <input
        {...restProps}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default Input;
