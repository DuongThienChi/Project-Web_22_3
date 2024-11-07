const express = require("express");
const UserService = require("../Services/userService");

const authController = {
    registerUser: async (req, res) => {
        try {
            await UserService.registerUser(req, res);
        } catch (error) {
            console.error("Error registering user:", error); // Log error
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
    },
};
module.exports = authController;
