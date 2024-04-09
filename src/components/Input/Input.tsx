"use client";
import styles from "./input.module.css";

interface IInputProps {
  label?: string;
  placeholder: string;
  type?: string;
  id: string;
  name: string;
}

const Input = ({
  label,
  placeholder,
  type = "text",
  id,
  name,
}: IInputProps) => {
  return (
    <div className={styles.inputEl}>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} placeholder={placeholder} id={id} name={name} />
    </div>
  );
};

export default Input;
