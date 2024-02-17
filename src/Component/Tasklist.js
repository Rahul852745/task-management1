import React, { useState, useEffect } from "react";
import { taskList, deleteTask } from "../Services/api";

const Tasklist = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const taskDetails = await taskList();
            return setTask(taskDetails);
        };
        fetchData();

    }, []);

    const handleDelete = async (taskId) => {
        if (window.confirm('You want to delete ?')) {
            await deleteTask(taskId);
            setTask(task.filter((task) => task.id !== taskId));

        }
    };

    return (
        <>
            <div className="container mt-5">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h4>Task List </h4>
                        <a className="btn btn-primary" href="/TaskAdd">Add Task</a>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table className="table table-striped table-hover table-bordered" width="100">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Task Name</th>
                                        <th>Description</th>
                                        <th>Created By</th>
                                        <th>Created At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {task.map((item, i) => (
                                        <tr key={i}>
                                            <th>{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.created_by}</td>
                                            <td>{item.created_at}</td>
                                            <td>
                                                <a type="button" className="btn btn-outline-success btn-sm" href={'/TaskAdd/' + item.id}>Edit</a>&nbsp;
                                                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Tasklist;