const users = require("../data/users");

// GET ALL USERS
const getUsers = (req, res) => {
    res.status(200).json(users);
};

// GET USER BY ID
const getUserById = (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(user);
};

// CREATE USER
const createUser = (req, res) => {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
};

// UPDATE USER
const updateUser = (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.status(200).json(user);
};

// DELETE USER
const deleteUser = (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.status(200).json({
        message: "User deleted successfully"
    });
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};