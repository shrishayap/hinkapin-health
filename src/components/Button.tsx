import React from 'react';

interface ButtonProps {
  width?: string;
  height?: string;
  borderless?: boolean;
  style?: 'primary' | 'secondary' | 'negative' | 'clear' | 'outline';
  onClick?: () => void;
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  width = 'w-full',
  height = '',
  borderless = false,
  style = 'primary',
  onClick,
  children,
  isLoading = false,
}) => {
  let buttonStyles = borderless ? 'py-2 text-left' : 'font-bold py-2 px-4 rounded';

  if (width) {
    buttonStyles += ` ${width}`;
  }
  if (height) {
    buttonStyles += ` ${height}`;
  }

  if (isLoading) {
    // Apply styles for the button when it's in the loading state
    buttonStyles += ' bg-gray-400 text-gray-600 cursor-not-allowed opacity-75';
  } else {
    if (borderless) {
      buttonStyles += ' border-none bg-transparent text-blue-500 hover:underline';
    } else {
      switch (style) {
        case 'primary':
          buttonStyles += ' bg-blue-600 hover:bg-blue-800 text-white';
          break;
        case 'secondary':
          buttonStyles += ' bg-green-500 hover:bg-green-600 text-white';
          break;
        case 'negative':
          buttonStyles += ' bg-red-500 hover:bg-red-600 text-white';
          break;
        case 'clear':
          buttonStyles += ' border-blue-500 text-blue-500 hover:bg-blue-100';
          break;
        case 'outline':
          buttonStyles += ' border border-black font-normal hover:bg-slate-100';
          break;
        default:
          buttonStyles += ' bg-blue-500 hover:bg-blue-600 text-white';
          break;
      }
    }
  }

  return (
    <button className={buttonStyles} onClick={onClick} disabled={isLoading}>
      {children}
    </button>
  );
};

export default Button;