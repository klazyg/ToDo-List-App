import styles from "./Table.module.scss";
import { MdTaskAlt } from "react-icons/md";
import TableRow from "../TableRow/TableRow";
import { ITask } from "../../pages";

type Props = {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Table: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <>
            <div className={styles.title}>
                <MdTaskAlt
                    size="3rem"
                    className={styles.icon} />
                <span className={styles.text}>
                    Tasks List
                </span>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.table_heading}>
                        <th className={styles.complete_cell}>Complete</th>
                        <th className={styles.name_cell}>Name</th>
                        <th className={styles.task_cell}>Task</th>
                        <th className={styles.priority_cell}>Priority</th>
                        <th className={styles.actions_cell}>Delete</th>
                        <th className={styles.date_cell}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow
                        tasks={tasks}
                        setTasks={setTasks} />
                </tbody>
            </table>
        </>
    );
};

export default Table;