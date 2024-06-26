"use client";
import styles from "./input.module.css";

interface IInputProps {
  label?: string;
  placeholder: string;
  type?: string;
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const Input = ({
  label,
  placeholder,
  type = "text",
  id,
  name,
  value,
  onChange,
  error,
}: IInputProps) => {
  return (
    <div className={styles.inputEl}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={
          error ? `${styles.input} ${styles.errorInput}` : ` ${styles.input}`
        }
        required
      />
    </div>
  );
};

export default Input;
