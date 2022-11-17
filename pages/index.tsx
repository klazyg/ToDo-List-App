import React, { useState } from "react";
import Button from '../components/Button/Button';
import Tasklist from '../components/TaskList/Tasklist';
import styles from '../styles/Home.module.scss';
import { MdTaskAlt } from "react-icons/md";

import { PrismaClient, Task, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const tasks: Task[] = await prisma.task.findMany();
    return {
        props: {
            initialTasks: tasks
        }
    };
}

async function saveTask(task: Prisma.TaskCreateInput) {
    const response = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export default function Index({ initialTasks }) {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>
                    <MdTaskAlt
                        // className={styles.title__icon}
                        size="3rem"
                    />
                    <h1 className={styles.title__text}>Task List</h1>
                    {/* set the font-size */}
                </div>
                <div className={styles.table}>
                    <h2></h2>
                    <h2>Name</h2>
                    <h2>Task</h2>
                    <h2>Priority</h2>
                    <h2>Actions</h2>
                    <h2>Date</h2>
                    {/* set the font-size */}
                </div>
                {tasks.map((c, i: number) => (
                    <div key={i}>
                        <Tasklist task={c} />
                    </div>
                ))}
                <section>
                    <Button
                        onSubmit={async (data, e) => {
                            try {
                                await saveTask(data);
                                setTasks([...tasks, data]);
                                e.target.reset();
                            } catch (err) {
                                console.log(err);
                            }
                        }}
                    />
                </section>
            </div>
        </div>
    );
}