import React, { useState } from "react";
import { Task } from '@prisma/client';
import styles from "./Tasklist.module.scss";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdTaskAlt, MdModeEdit } from "react-icons/md";

interface TasklistProps {
  task: Task;
}

export default function Tasklist(props: TasklistProps) {
  return (
    <div className={styles.tasklist}>
      <div className={styles.tasklist__container}>
        <div>
          <MdTaskAlt
            // className={styles.icon__complete}
            size="2rem"
          />
        </div>
        <div>
          <span>
            {props.task.name}
          </span>
        </div>
        <div>
          <span>
            {props.task.task}
          </span>
        </div>
        <div>
          <span>
            {props.task.priority}
          </span>
        </div>
        <div>
          <MdModeEdit
            // className={styles.icon__edit}
            size="2rem"
          />
          <RiDeleteBin6Fill
            // className={styles.icon__delete}
            size="2rem"
          />
        </div>
        <div>
          <span>
            {props.task.deadlineTimestamp}
          </span>
        </div>
      </div>
    </div>
  );
}