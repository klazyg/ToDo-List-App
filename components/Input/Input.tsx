import styles from "./Input.module.scss";

export default function Input({placeholder, name, onChange}) {
  return (
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}