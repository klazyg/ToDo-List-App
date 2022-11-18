import React, { useState } from "react";
import Button from '../components/Button/Button';
import Tasklist from '../components/TaskList/Tasklist';
import styles from '../styles/Home.module.scss';
import { MdTaskAlt } from "react-icons/md";
import { PrismaClient, Task, Prisma } from '@prisma/client';
import Input from "../components/Input/Input";

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const tasks: Task[] = await prisma.task.findMany();
    return {
        props: {
            initialTasks: tasks
        }
    };
}

export default function Index({ initialTasks }) {
    //useswr
    const [inputs, setInputs] = useState({});

    async function saveTask(task: any) {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(task)
        });
    
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    
    }

    function handleOnChange(event) {
        setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        saveTask(inputs);
    }  

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>
                    <MdTaskAlt
                        size="3rem"
                    />
                    <h1>Task List</h1>
                </div>
                <div className={styles.table}>
                    <h2></h2>
                    <h2>Name</h2>
                    <h2>Task</h2>
                    <h2>Priority</h2>
                    <h2>Actions</h2>
                    <h2>Date</h2>
                </div>
                {initialTasks.map((c, i: number) => (
                    <div key={i}>
                        <Tasklist task={c} />
                    </div>
                ))}
                <section>
                    <form onSubmit={handleOnSubmit} className={styles.taskForm}>
                        <Input 
                            onChange = {handleOnChange}
                            placeholder="Name"
                            name="name"
                        />
                        <Input
                            onChange = {handleOnChange}
                            placeholder="Add new"
                            name="task"
                        />
                        <Input
                            onChange = {handleOnChange}
                            placeholder="Priority"
                            name="priority"
                        />
                        <Input
                            onChange = {handleOnChange}
                            placeholder="Date"
                            name="date"
                        />
                        <Button
                    />
                    </form>
                </section>
            </div>
        </div>
    );
}