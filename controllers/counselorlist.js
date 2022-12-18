const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const bcrypt = require("bcryptjs");

module.exports.getCounselorlist = async (req, res, next) => {
    db.query(
        "SELECT c.id as cId, c.name as cName, c.experience as cExperience, c.phone as cPhone, c.email as cEmail, c.education as cEducation, c.time as cTime, c.img as cImg FROM counselor c",
        (Err, result) => {
            if (Err) throw Err;
            if (!result[0])
                return res.json({
                    status: "error",
                    error: "No counselor found",
                });
            else {
                req.counselorlist = result;
                return next();
            }
        }
    );
};

module.exports.createCounselor = async (req, res, next) => {
    if (req.role === "ADMIN") {
        const {
            name,
            email,
            phone,
            password,
            education,
            experience,
            time,
            img,
        } = req.body;
        db.query(
            "SELECT * FROM counselor WHERE email = ? or phone = ?",
            [email, phone],
            async (err, result) => {
                if (err) throw err;
                if (result[0])
                    return (
                        res,
                        json({
                            status: "error",
                            error: "Counselor has already been created",
                        })
                    );
                else {
                    const pass = await bcrypt.hash(password, 8);
                    db.query(
                        "INSERT INTO counselor SET ?",
                        {
                            name: name,
                            email: email,
                            phone: phone,
                            password: pass,
                            education: education,
                            experience: experience,
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

module.exports.deleteCounselor = async (req, res, next) => {
    if (req.role === "ADMIN") {
        counselorId = Number(req.params.cId);
        db.query(
            `DELETE FROM counselor WHERE id = ?`,
            [counselorId],
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
