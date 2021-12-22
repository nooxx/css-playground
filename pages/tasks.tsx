import type {NextPageWithLayout} from "./_app";
import type {FormEvent} from "react";
import {useState} from "react";
import Layout from "../components/Layout";

type TASK = {
    id: number,
    name: string,
    isCompleted: boolean,
}

type TASKS = TASK[]

const DEFAULT_TASKS = [
    {
        id: 1,
        name: "Task 1",
        isCompleted: false,
    },
    {
        id: 2,
        name: "Task 2",
        isCompleted: false,
    },
    {
        id: 3,
        name: "Task 3",
        isCompleted: false,
    }
]

const Tasks: NextPageWithLayout = () => {
    const [tasks, setTasks] = useState<TASKS>(DEFAULT_TASKS)
    const [taskName, setTaskName] = useState<string>('')

    const handleChangeTaskName = (e: FormEvent<HTMLInputElement>) => {
        setTaskName(e.currentTarget.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (taskName === '') return
        const newTask: TASK = {
            id: Date.now(),
            name: taskName,
            isCompleted: false,
        }
        setTasks([...tasks, newTask])
        setTaskName('')
    }


    const handleToggleTask = (id: number) => {
        setTasks(tasks.map(t => (t.id === id ? {
            ...t,
            isCompleted: !t.isCompleted
        } : t)))
    }

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
        <div>
            <h1 className="text-xl mb-4">Tasks</h1>

            <form className="my-8 flex items-center gap-x-4"
                  onSubmit={handleSubmit}>
                <input value={taskName} onChange={handleChangeTaskName}
                       placeholder="Enter task name..."/>
                <button type="submit">Add new task</button>
            </form>

            <div className="max-w-xl">
                {tasks.map((task, index) => (
                    <div className="flex items-center mb-5"
                         key={`task-${index}`}>
                        <button
                            className="mr-4"
                            onClick={() => handleDeleteTask(task.id)}
                        >
                            X
                        </button>
                        <button
                            onClick={() => handleToggleTask(task.id)}
                            className={`flex-grow ${task.isCompleted ? 'line-through bg-green-300 border-green-800' : ''}`}
                        >
                            {task.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

Tasks.getLayout = page => <Layout>{page}</Layout>

export default Tasks
