import styles from "./TableRow.module.scss";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdTaskAlt } from "react-icons/md";
import { ITask } from "../../pages";
import axios from "axios";
import { useState } from "react";

type Props = {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TableRow: React.FC<Props> = ({ tasks, setTasks }) => {

    const handleComplete = (taskId: number) => {
        axios.delete("/api/tasks", { data: { taskId } });
        const filteredTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(filteredTasks);
    };

    return (
        <>
            {tasks.map((task, index) => (
                <tr className={styles.table_row} key={index}>
                    <td className={styles.table_cell}>
                        <MdTaskAlt
                            className={styles.icon_complete}
                            size="2.5rem"
                            onClick={() => handleComplete(task.id)}
                            type="button"
                        />
                    </td>
                    <td className={styles.table_cell}>{task.name}</td>
                    <td className={styles.table_cell}>{task.task}</td>
                    <td className={styles.table_cell}>{task.priority}</td>
                    <td className={styles.table_cell}>
                        <RiDeleteBin6Fill
                            className={styles.icon_remove}
                            size="2.5rem"
                            onClick={() => handleComplete(task.id)}
                            type="button"
                        />
                    </td>
                    <td className={styles.table_cell}>{task.date}</td>
                </tr>
            ))}
        </>
    );
};

export default TableRow;