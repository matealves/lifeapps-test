"use client";

import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type Props = {
  placeholder: string;
  password?: boolean;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
};

export const Input = ({
  placeholder,
  password,
  icon,
  filled,
  value,
  onChange,
  onEnter,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() === "enter" && onEnter) {
      onEnter();
    }
  };

  const handleClickSearch = () => {
    if (onEnter) onEnter();
  };

  return (
    <div
      className={`has-[:focus]:border-white flex items-center h-12 rounded-2xl ${
        filled && "bg-gray-50"
      }`}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="ml-4 size-5 text-gray-400 cursor-pointer"
          onClick={handleClickSearch}
        />
      )}
      <input
        type={password && !showPassword ? "password" : "text"}
        className="flex-1 outline-none bg-transparent h-full px-4 text-sm placeholder:text-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {password && (
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? faEye : faEyeSlash}
          className="  cursor-pointer mr-4 text-gray-400 size-6"
        />
      )}
    </div>
  );
};
