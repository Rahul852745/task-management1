import React, { useState, useEffect } from "react";
import { addTask, updateTask, getTaskById } from "../Services/api";
import Header from "./Header";
import { useParams } from 'react-router-dom';


const TaskAdd = () => {
    const { id } = useParams();
    const [task, setTask] = useState({
        name: '',
        description: '',
        created_by: '',
        // Add other fields as needed...
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };


    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const TaskDetails = await getTaskById(id);
                TaskDetails.map((value, index) => { return setTask(value) });
            };
            fetchData();
        }

    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setId(id);
        // if (!employeeData.name.trim()) {
        //     // You can add validation and error handling here
        //     return;
        // }

        if (id) {
            await updateTask(id, task);
            // toast.success("Employee Updated !", {
            //     position: toast.POSITION.TOP_RIGHT,
            // });
            window.location.href = "/Home";

        } else {
            try {
                await addTask(task);
                // onAddEmployee(newEmployee);
                // toast.success("Employee Added !", {
                //     position: toast.POSITION.TOP_RIGHT,
                // });
                window.location.href = "/Home";
            } catch (error) {
                // Handle error (display an error message, log, etc.)
                console.error('Error adding employee:', error);
            }
        }
    };
    return (
        <>
            <Header />
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="" name="name" onChange={handleInputChange} value={task.name} required />
                            <label for="floatingInput">Task Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="description" onChange={handleInputChange} value={task.description} required></textarea>
                            <label for="floatingTextarea">Description</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="" name="created_by" onChange={handleInputChange} value={task.created_by} required />
                            <label for="floatingInput">Created By</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a className="btn btn-warning" href="/Home">Back</a>
                        <button type="submit" className="btn btn-primary">{id ? 'Edit' : 'Add'}</button>
                    </div>
                </form>
            </div>
        </>
    )
}


export default TaskAdd;