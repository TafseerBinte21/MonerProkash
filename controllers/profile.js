const db = require("../config/db-config");

module.exports.getProfile = async (req, res, next) => {
    console.log("sdbh")
    id = Number(req.params.id);
    db.query(
        `SELECT * FROM appointment WHERE userId = ?`,
        [id],
        async (Err, result) => {
            if (Err) throw Err;
            if (result[0]) {
                db.query(
                    `SELECT * FROM counselor WHERE id = ?`,
                    [result[0].counselorId],
                    async (Err, newResult) => {
                        if (Err) throw Err;
                        if (!newResult[0]) {
                            return next();
                        } else {
                            console.log("scjhscsj");
                            req.appointment = newResult[0];
                            
                        }
                    }
                );
            }
        }
    );
    id = Number(req.params.id);
    db.query(
        `SELECT * FROM course_booking WHERE userId = ?`,
        [id],
        async (Err, result) => {
            if (Err) throw Err;
            if (!result[0]) {
                return next();
            } else {               
                db.query(
                    `SELECT * FROM course WHERE id = ?`,
                    [result[0].courseId],
                    async (Err, newResult) => {
                        if (Err) throw Err;
                        if (!newResult[0]) {
                            return next();
                        } else {
                            console.log("tafa")
                            req.course_booking = newResult[0];
                            return next();
                        }
                    }
                );
            }
        }
    );
};




// module.exports.getProfile1 = async (req, res, next) => {
//     id = Number(req.params.id);
//     db.query(
//         `SELECT * FROM course_booking WHERE userId = ?`,
//         [id],
//         async (Err, result) => {
//             if (Err) throw Err;
//             if (!result[0]) {
//                 return next();
//             } else {
//                 db.query(
//                     `SELECT * FROM course WHERE id = ?`,
//                     [result[0].courseId],
//                     async (Err, newResult) => {
//                         if (Err) throw Err;
//                         if (!newResult[0]) {
//                             return next();
//                         } else {
//                             req.course_booking = newResult[0];
//                             return next();
//                         }
//                     }
//                 );
//             }
//         }
//     );
// };

module.exports.deletecourse = async (req, res, next) => {
    userId = Number(req.params.id);
    courseId = Number(req.body.courseId);
    db.query(
        `DELETE FROM course_booking WHERE userId = ? and courseId = ?`,
        [userId, courseId],
        async (Err, result) => {
            if (Err) throw Err;
            if (!result[0]) {
                return next();
            } else {
                return next();
            }
        }
    );
};




module.exports.deleteProfile = async (req, res, next) => {
    userId = Number(req.params.id);
    counselorId = Number(req.body.counselorId);
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
   
};
