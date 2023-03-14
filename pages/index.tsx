import Form from '../components/Form/Form';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import axios from 'axios';
import Table from '../components/Table/Table';

export interface ITask {
  id: number;
  name: string;
  task: string;
  priority: string;
  date: string;
}
interface HomeProps {
  tasksData: ITask[];
}

const Home: React.FC<HomeProps> = ({ tasksData }) => {
  const [tasks, setTasks] = useState(tasksData);
  const [lastTaskId, setLastTaskId] = useState(tasksData.length > 0 ? tasksData[tasksData.length - 1].id : 0);

  const onSubmitTask = (task) => {
    const newTask = { ...task, id: lastTaskId + 1 };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setLastTaskId((prevId) => prevId + 1);
    axios.post("/api/tasks", { tasks: [newTask] });
  };

  return (
    <>
      <div className={styles.main}>
        <Table
          tasks={tasks}
          setTasks={setTasks} />
        <Form
          onSubmitTask={onSubmitTask} />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/tasks");
    return {
      props: {
        tasksData: response.data.tasks,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        tasksData: [],
      },
    };
  }
}

export default Home;