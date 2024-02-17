// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:2000/api';

export const taskList = async () => {
    const response = await axios.get(`${API_BASE_URL}/taskList`);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(`${API_BASE_URL}/addTask`, task);
    return response.data;
};

export const updateTask = async (id, task) => {
    const response = await axios.put(`${API_BASE_URL}/updateTask/${id}`, task);
    return response.data;
};

export const deleteTask = async (taskId) => {
    const response = await axios.delete(`${API_BASE_URL}/deleteTask/${taskId}`);
    return response.data;
};

export const getTaskById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/getTaskById/${id}`);
    return response.data;
};

// export const employeesIsActive = async (employeeId, status) => {
//     const response = await axios.put(`${API_BASE_URL}/employeesIsActive/${employeeId}`, status);
//     return response.data;
// };

export const userLogin = async (users) => {
    const response = await axios.post(`${API_BASE_URL}/login`, users);
    return response.data;
};


export const addUser = async (users) => {
    const response = await axios.post(`${API_BASE_URL}/addUser`, users);
    return response.data;
};


