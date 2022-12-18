const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const bcrypt = require("bcryptjs");

module.exports.getCourses = async (req, res, next) => {
    db.query("SELECT * FROM course", (Err, result) => {
        if (Err) throw Err;
        if (!result[0])
            return res.json({
                status: "error",
                error: "No course found",
            });
        else {
            req.courses = result;
            return next();
        }
    });
};

module.exports.createCourse = async (req, res, next) => {
    if (req.role === "ADMIN") {
        const { name, description, time, img } = req.body;
        db.query(
            "SELECT * FROM course WHERE name = ?",
            [name],
            async (err, result) => {
                if (err) throw err;
                if (result[0])
                    return (
                        res,
                        json({
                            status: "error",
                            error: "Course has already been created",
                        })
                    );
                else {
                    db.query(
                        "INSERT INTO course SET ?",
                        {
                            name: name,
                            description: description,
                            time: time,
                            img: img,
                        },
                        (error, results) => {
                            if (error) throw error;
                            return next();
                        }
                    );
                }
            }
        );
    }
};

module.exports.deleteCourse = async (req, res, next) => {
    if (req.role === "ADMIN") {
        id = Number(req.params.id);
        db.query(
            `DELETE FROM course WHERE id = ?`,
            [id],
            async (Err, result) => {
                if (Err) throw Err;
                if (!result[0]) {
                    return next();
                } else {
                    return next();
                }
            }
        );
    }
};
