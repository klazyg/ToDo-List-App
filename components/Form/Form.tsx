import { useState } from "react";
import styles from "./Form.module.scss";
import { ITask } from '../../pages';

type Props = {
    onSubmitTask: (task: ITask) => void;
}

const Form: React.FC<Props> = ({ onSubmitTask }) => {
    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('low');
    const [date, setDate] = useState('');
    const [idCounter, setIdCounter] = useState(1);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(event.target.value);
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = idCounter;
        onSubmitTask({ id, name, task, priority, date });
        setName('');
        setTask('');
        setPriority('low');
        setDate('');
        setIdCounter(idCounter + 1);
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={`${styles.row} ${styles.row1}`}>
                    <input
                        className={styles.input_name}
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Your name"
                        required
                    />
                    <input
                        className={styles.input_task}
                        value={task}
                        onChange={handleTaskChange}
                        placeholder="Add a new task"
                        required
                    />
                </div>
                <div className={`${styles.row} ${styles.row2}`}>
                    <select className={styles.select} value={priority} onChange={handlePriorityChange}>
                        <option value="" disabled>Choose a priority</option>
                        <option value="low">Low</option>
                        <option value="middle">Middle</option>
                        <option value="high">High</option>
                    </select>
                    <input
                        className={styles.input_date}
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        placeholder="Date"
                        required
                    />
                    <div className={styles.btn_position}>
                        <button
                            className={styles.btn}
                            type="submit"
                            value="Button">
                            Submit
                        </button>
                    </div>
                </div>
            </form>

        </>
    );
};

export default Form;