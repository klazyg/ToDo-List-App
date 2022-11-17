import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import styles from "./Button.module.scss";
import Input from '../Input/Input';

interface ButtonProps {
  onSubmit: any;
}

export default function Button(props: ButtonProps) {
  const { register, handleSubmit } = useForm();
  return (
    <form className={styles.taskForm} onSubmit={handleSubmit(props.onSubmit)}>
      <Input
        placeholder="Name"
        name="name"
        formRef={register('name', { required: true })}
      />
      <Input
        placeholder="Add new"
        name="task"
        formRef={register('task', { required: true })}
      />
      <Input
        placeholder="Priority"
        name="priority"
        formRef={register('priority', { required: true })}
      />
      <Input
        placeholder="Date"
        name="date"
        formRef={register('date', { required: true })}
      />
      <button
        className={styles.taskForm__btn}
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}