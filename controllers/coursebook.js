const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const bcrypt = require("bcryptjs");

module.exports.getCourse = async (req, res, next) => {
    id = Number(req.params.id);
    db.query(
        `SELECT * FROM course WHERE id = ?`,
        [id],
        async (Err, result) => {
            if (Err) throw Err;
            if (!result[0])
                return res.json({
                    status: "error",
                    error: "No course found",
                });
            else {
                req.booking = result[0];
                return next();
            }
        }
    );
};

module.exports.postCourse = async (req, res, next) => {
    courseId = Number(req.params.id);
    userId = Number(req.body.userId);
    // db.query(
    //     "SELECT userId FROM course_booking WHERE userId = ?",
    //     [userId],
    //     async (err, result) => {
    //         if (err) throw err;
    //         if (result[0])
    //             return res.json({
    //                 status: "error",
    //                 error: "Already requested for an appointment.",
    //             });
    //         else {
                db.query(
                    "INSERT INTO course_booking SET ?",
                    {
                        userId: userId,
                        courseId: courseId,
                        status: "pending",
                    },
                    (error, results) => {
                        if (error) throw error;
                        return next();
                    }
                );
            }
//         }
//     );
// };
