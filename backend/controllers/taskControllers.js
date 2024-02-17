const db = require('../../db');

exports.taskList = (req, res) => {
    const query = 'SELECT * FROM add_task';
    db.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ message: error.message });
        } else {
            res.json(results);
        }
    });
};

exports.addTask = (req, res) => {
    const { name, description, created_by } = req.body;
    const query = 'INSERT INTO add_task (name, description, created_by) VALUES (?,?,?)';
    db.query(query, [name, description, created_by], (error, results) => {
        if (error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(201).json({ id: results.insertId, name, description, created_by });
        }
    });
};


exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { name, description, created_by } = req.body;
    const query = "UPDATE add_task SET name = ?, description = ?, created_by = ? WHERE id = ?";
    db.query(query, [name, description, created_by, id], (error, results) => {
        if (error) {
            res.status(400).json({ message: error.message });
        } else {
            res.json({ id, name, description, created_by });
        }
    });
};


exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM add_task WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            res.status(400).json({ message: error.message });
        } else {
            res.json({ id });
        }
    });
}


exports.getTaskById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT name,description,created_by,id FROM add_task WHERE id = ?';
    console.log(query);
    db.query(query, [id], (error, results) => {
        if (error) {
            res.status(500).json({ message: error.message });
        } else {
            res.json(results);
        }
    });
};

exports.userLogin = (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM admin_login WHERE email = ? AND password = ?';
    // Use 'AND' instead of ',' in the WHERE clause

    db.query(query, [email, password], (error, results) => {
        if (error) {
            res.status(500).json({ message: error.message });
        } else {
            if (results.length > 0) {
                // User is authenticated, you can send a success message or token here
                res.json({ message: 'Login successful' });
            } else {
                // User credentials are incorrect
                res.json({ message: 'Invalid email or password' });
            }
        }
    });
};

exports.addUser = (req, res) => {
    const { email, password } = req.body;

    // Check if the user already exists
    const checkQuery = 'SELECT * FROM admin_login WHERE email = ?';
    db.query(checkQuery, [email], (checkError, checkResults) => {
        if (checkError) {
            res.json({ message: checkError.message, status: 500 });
        } else if (checkResults.length > 0) {
            // User already exists
            res.json({ message: 'User already registered with this email', status: 409 });
        } else {
            // User does not exist, proceed with adding the user
            const insertQuery = 'INSERT INTO admin_login (email, password) VALUES (?,?)';
            db.query(insertQuery, [email, password], (insertError, results) => {
                if (insertError) {
                    res.json({ message: insertError.message, status: 400 });
                } else {
                    res.json({ id: results.insertId, email, password, status: 201 });
                }
            });
        }
    });
};

