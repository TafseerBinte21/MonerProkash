const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const bcrypt = require("bcryptjs");

module.exports.getBook = async (req, res, next) => {
    id = Number(req.params.id);
    db.query(
        `SELECT * FROM counselor WHERE id = ?`,
        [id],
        async (Err, result) => {
            if (Err) throw Err;
            if (!result[0])
                return res.json({
                    status: "error",
                    error: "No counselor found",
                });
            else {
                req.booking = result[0];
                return next();
            }
        }
    );
};

module.exports.postBook = async (req, res, next) => {
    counselorId = Number(req.params.id);
    userId = Number(req.body.userId);
    db.query(
        "SELECT userId FROM appointment WHERE userId = ?",
        [userId],
        async (err, result) => {
            if (err) throw err;
            if (result[0])
                return res.json({
                    status: "error",
                    error: "Already requested for an appointment.",
                });
            else {
                db.query(
                    "INSERT INTO appointment SET ?",
                    {
                        userId: userId,
                        counselorId: counselorId,
                        status: "pending",
                    },
                    (error, results) => {
                        if (error) throw error;
                        return next();
                    }
                );
            }
        }
    );
};
