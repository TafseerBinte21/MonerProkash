const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const bcrypt = require("bcryptjs");

const help = async (req, res, next) => {
    db.query("SELECT * FROM counselor", (Err, result) => {
        if (Err) throw Err;
        if (!result[0])
            return res.json({
                status: "error",
                error: "No counselor found",
            });
        else {
            req.counselors = result;
            return next();
        }
    });
};

module.exports = help;
