const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const bcrypt = require("bcryptjs");

module.exports.getCourselist = async (req, res, next) => {
    if (req.role === "ADMIN") {
        db.query(
            "SELECT u.id as uId, u.name as uName, u.phone as uPhone, u.email as uEmail, u.gender as uGender, c.id as cId, c.name as cName, c.description as cDescription, c.time as cTime, c.img as cImg FROM course_booking a JOIN user u ON a.userId = u.id JOIN course c on a.courseId = c.id",
            
            (Err, result) => {
                if (Err) throw Err;
                if (!result[0]){
                req.courselist ="";
                return next();
            }
                else {
                    req.courselist = result;
                    return next();
                }
            }
        );
    // } else if (req.role === "ADMIN") {
    //     db.query(
    //         "SELECT u.id as uId, u.name as uName, u.phone as uPhone, u.email as uEmail, u.gender as uGender, c.id as cId, c.name as cName, c.experience as cExperience, c.phone as cPhone, c.email as cEmail, c.education as cEducation, c.time as cTime, c.img as cImg FROM appointment a JOIN user u ON a.userId = u.id JOIN counselor c on a.counselorId = c.id",
    //         (Err, result) => {
    //             if (Err) throw Err;
    //             if (!result[0]) {
    //             req.bookinglist = "";
    //             return next();
    //                 }
    //             else {
    //                 req.bookinglist = result;
    //                 return next();
    //             }
    //         }
    //     );
    }
};

module.exports.createCourseBooking = async (req,  next) => {
    if (req.role === "ADMIN") {
        userId = Number(req.body.userId);
        courseId = Number(req.body.userId);
        db.query(
            "INSERT INTO course_booking SET ?",
            [userId,courseId],
            {
                userId: userId,
                courseId: courseId,
            },
            (error, results) => {
                if (error) throw error;
                return next();
            }
        );
        
                }
            }
//         );
//     }
// };

module.exports.deleteAppointment = async (req, res, next) => {
    if (req.role === "ADMIN" ) {
        userId = Number(req.params.uId);
        counselorId = Number(req.params.cId);
        db.query(
            `DELETE FROM course_booking WHERE userId = ? and courseId = ?`,
            [userId, counselorId],
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
