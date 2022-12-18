const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const bcrypt = require("bcryptjs");

module.exports.getBookinglist = async (req, res, next) => {
    if (req.role === "COUNSELOR") {
        db.query(
            "SELECT u.id as uId, u.name as uName, u.phone as uPhone, u.email as uEmail, u.gender as uGender, a.counselorId as cId FROM appointment a JOIN user u ON a.userId = u.id and a.counselorId = ?",
            [req.counselor.id],
            (Err, result) => {
                if (Err) throw Err;
                if (!result[0]){
                req.bookinglist ="";
                return next();
            }
                else {
                    req.bookinglist = result;
                    return next();
                }
            }
        );
    } else if (req.role === "ADMIN") {
        db.query(
            "SELECT u.id as uId, u.name as uName, u.phone as uPhone, u.email as uEmail, u.gender as uGender, c.id as cId, c.name as cName, c.experience as cExperience, c.phone as cPhone, c.email as cEmail, c.education as cEducation, c.time as cTime, c.img as cImg FROM appointment a JOIN user u ON a.userId = u.id JOIN counselor c on a.counselorId = c.id",
            (Err, result) => {
                if (Err) throw Err;
                if (!result[0]) {
                req.bookinglist = "";
                return next();
                    }
                else {
                    req.bookinglist = result;
                    return next();
                }
            }
        );
    }
};

module.exports.createAppointment = async (req, res, next) => {
    if (req.role === "ADMIN") {
        userId = Number(req.body.userId);
        counselorId = Number(req.body.counselorId);
        db.query(
            "SELECT * FROM appointment WHERE userId = ? and counselorId = ?",
            [userId, counselorId],
            async (err, result) => {
                if (err) throw err;
                if (result[0])
                    return (
                        res,
                        json({
                            status: "error",
                            error: "Appointment has already been booked",
                        })
                    );
                else {
                    db.query(
                        "INSERT INTO appointment SET ?",
                        {
                            userId: userId,
                            counselorId: counselorId,
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

module.exports.deleteAppointment = async (req, res, next) => {
    if (req.role === "ADMIN" || req.role === "COUNSELOR") {
        userId = Number(req.params.uId);
        counselorId = Number(req.params.cId);
        db.query(
            `DELETE FROM appointment WHERE userId = ? and counselorId = ?`,
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
