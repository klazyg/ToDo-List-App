import styles from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  name: string;
  formRef: any;
}

export default function Input(props: InputProps) {
  return (
    <input
      className={styles.input}
      name={props.name}
      placeholder={props.placeholder}
      ref={props.formRef}
    />
  );
}