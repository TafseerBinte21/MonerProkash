const express = require("express");
const router = express.Router();

const registerController = require("../controllers/register");
const loginController = require("../controllers/login");
const logoutController = require("../controllers/logout");
const isLoggedInController = require("../controllers/isLoggedIn");
const helpController = require("../controllers/help");
const courseController = require("../controllers/course");
const adminloginController = require("../controllers/adminlogin");
const bookController = require("../controllers/book");
const profileController = require("../controllers/profile");
const bookinglistController = require("../controllers/bookinglist");
const userlistController = require("../controllers/userlist");
const counselorlistController = require("../controllers/counselorlist");
const counselorlogin = require("../controllers/counselorlogin");
const coursebookController = require("../controllers/coursebook");
const courselistController = require("../controllers/courselist");

router.get("/", isLoggedInController, (req, res) => {
    if (req.user) {
        res.render("monerprokash", { user: req.user, role: req.role });
    } else if (req.admin) {
        res.render("monerprokash", { user: req.admin, role: req.role });
    } else if (req.counselor) {
        res.render("monerprokash", { user: req.counselor, role: req.role });
    } else {
        res.render("index");
    }
});

router.get("/register", isLoggedInController, (req, res) => {
    if (req.user || req.admin || req.counselor) {
        res.redirect("/");
    } else {
        res.render("register");
    }
});

router.post("/register", registerController);

router.get("/login", isLoggedInController, (req, res) => {
    if (req.user || req.admin || req.counselor) {
        res.redirect("/");
    } else {
        res.render("login");
    }
});

router.post("/login", loginController);

router.get("/adminlogin", isLoggedInController, (req, res) => {
    if (req.user || req.admin || req.counselor) {
        res.redirect("/");
    } else {
        res.render("adminLogin");
    }
});

router.post("/adminlogin", adminloginController);

router.get("/counselorlogin", isLoggedInController, (req, res) => {
    if (req.user || req.admin || req.counselor) {
        res.redirect("/");
    } else {
        res.render("counselorLogin");
    }
});

router.post("/counselorlogin", counselorlogin);

router.get("/about", isLoggedInController, (req, res) => {
    if (req.user) {
        res.render("about", { user: req.user, role: req.role });
    } else if (req.admin) {
        res.render("about", { user: req.admin, role: req.role });
    } else if (req.counselor) {
        res.render("about", { user: req.counselor, role: req.role });
    } else {
        res.render("index");
    }
});

router.get("/help", isLoggedInController, helpController, (req, res) => {
    if (req.user) {
        if (req.counselors) {
            res.render("help", {
                user: req.user,
                role: req.role,
                counselors: req.counselors,
            });
        } else {
            res.render("help", {
                user: req.user,
                role: req.role,
                counselors: "",
            });
        }
    } else if (req.admin || req.counselor) {
        res.redirect("/");
    } else {
        res.render("index");
    }
});

router.get(
    "/course",
    isLoggedInController,
    courseController.getCourses,
    (req, res) => {
        if (req.user) {
            if (req.courses) {
                res.render("course", {
                    user: req.user,
                    role: req.role,
                    courses: req.courses,
                });
            } else {
                res.render("course", {
                    user: req.user,
                    role: req.role,
                    courses: "",
                });
            }
        } else if (req.admin) {
            if (req.courses) {
                res.render("course", {
                    user: req.admin,
                    role: req.role,
                    courses: req.courses,
                });
            } else {
                res.render("course", {
                    user: req.admin,
                    role: req.role,
                    courses: "",
                });
            }
        } else if (req.counselor) {
            if (req.courses) {
                res.render("course", {
                    user: req.counselor,
                    role: req.role,
                    courses: req.courses,
                });
            } else {
                res.render("course", {
                    user: req.counselor,
                    role: req.role,
                    courses: "",
                });
            }
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/course/:id",
    isLoggedInController,
    courseController.deleteCourse,
    (req, res) => {
        if (req.admin) {
            res.redirect(`/course`);
        } else if (req.user || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.post(
    "/course",
    isLoggedInController,
    courseController.createCourse,
    (req, res) => {
        if (req.admin) {
            res.redirect(`/course`);
        } else if (req.user || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get("/contact", isLoggedInController, (req, res) => {
    if (req.user) {
        res.render("contact", { user: req.user, role: req.role });
    } else if (req.admin) {
        res.render("contact", { user: req.admin, role: req.role });
    } else if (req.counselor) {
        res.render("contact", { user: req.counselor, role: req.role });
    } else {
        res.render("index");
    }
});

router.get("/select", isLoggedInController, (req, res) => {
    if (req.user) {
        res.render("select", { user: req.user, role: req.role });
    } else if (req.admin) {
        res.render("select", { user: req.admin, role: req.role });
    } else if (req.counselor) {
        res.render("select", { user: req.counselor, role: req.role });
    } else {
        res.render("index");
    }
});

router.get("/success", isLoggedInController, (req, res) => {
    if (req.user) {
        res.render("success", { user: req.user, role: req.role });
    } else if (req.admin) {
        res.render("success", { user: req.admin, role: req.role });
    } else if (req.counselor) {
        res.render("success", { user: req.counselor, role: req.role });
    } else {
        res.render("index");
    }
});

router.get(
    "/book/:id",
    isLoggedInController,
    bookController.getBook,
    (req, res) => {
        if (req.user) {
            if (req.booking) {
                res.render("book", {
                    user: req.user,
                    role: req.role,
                    booking: req.booking,
                });
            } else {
                res.redirect("/");
            }
        } else if (req.admin || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.post(
    "/book/:id",
    isLoggedInController,
    bookController.postBook,
    async (req, res) => {
        if (req.user) {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            res.redirect("/help");
        } else if (req.admin || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);



router.get(
    "/coursebook/:id",
    isLoggedInController,
    coursebookController.getCourse,
    (req, res) => {
        if (req.user) {
            if (req.booking) {
                res.render("coursebook", {
                    user: req.user,
                    role: req.role,
                    booking: req.booking,
                });
            } else {
                res.redirect("/");
            }
        } else if (req.admin) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.post(
    "/coursebook/:id",
    isLoggedInController,
    coursebookController.postCourse,
    async (req, res) => {
        if (req.user) {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            res.redirect("/course");
        } else if (req.admin) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/profile/:id",
    isLoggedInController,
    profileController.getProfile,
    (req, res) => {
        if (req.user) {
            if (req.appointment && req.course_booking) {
                res.render("profile", {
                    user: req.user,
                    role: req.role,
                    appointment: req.appointment,
                    course_booking: req.course_booking,
                });
            } else if (!req.appointment && req.course_booking) {
                console.log(req.course_booking);
                res.render("profile", {
                    user: req.user,
                    role: req.role,
                    appointment: "",
                    course_booking: req.course_booking,
                });
            } else if (req.appointment && !req.course_booking) {
                res.render("profile", {
                    user: req.user,
                    role: req.role,
                    course_booking: "",
                    appointment: req.appointment,
                    
                });
            } 
             else {
                res.render("profile", {
                    user: req.user,
                    role: req.role,
                    appointment: "",
                    course_booking: "",
                });
            } 
        } else if (req.admin || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

// router.get(
//     "/profile/:id",
//     isLoggedInController,
//     profileController.getProfile,
//     (req, res) => {
//         if (req.user) {
//             if (req.course_booking) {
//                 res.render("profile", {
//                     user: req.user,
//                     role: req.role,
//                     course_booking: req.course_booking,
//                 });
//             } else {
//                 res.render("profile", {
//                     user: req.user,
//                     role: req.role,
//                     course_booking: "",
//                 });
//             }
//         } else if (req.admin || req.counselor) {
//             res.redirect("/");
//         } else {
//             res.render("index");
//         }
//     }
// );

router.post(
    "/c_profile/:id",
    isLoggedInController,
    profileController.deletecourse,
    (req, res) => {
        if (req.user) {
            res.redirect(`/profile/${req.user.id}`);
        } else if (req.admin|| req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);


router.post(
    "/a_profile/:id",
    isLoggedInController,
    profileController.deleteProfile,
    (req, res) => {
        if (req.user) {
            res.redirect(`/profile/${req.user.id}`);
        } else if (req.admin || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/bookinglist",
    isLoggedInController,
    bookinglistController.getBookinglist,
    (req, res) => {
        if (req.counselor) {
            if (req.bookinglist) {
                res.render("bookinglist", {
                    user: req.counselor,
                    role: req.role,
                    bookinglist: req.bookinglist,
                });
            } else {
                res.render("bookinglist", {
                    user: req.counselor,
                    role: req.role,
                    bookinglist: "",
                });
            }
        } else if (req.admin) {
            if (req.bookinglist) {
                res.render("bookinglist", {
                    user: req.admin,
                    role: req.role,
                    bookinglist: req.bookinglist,
                });
            } else {
                res.render("bookinglist", {
                    user: req.admin,
                    role: req.role,
                    bookinglist: "",
                });
            }
        } else if (req.user) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.post(
    "/bookinglist",
    isLoggedInController,
    bookinglistController.createAppointment,
    (req, res) => {
        if (req.admin) {
            res.redirect(`/bookinglist`);
        } else if (req.user || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/bookinglist/:cId/:uId",
    isLoggedInController,
    bookinglistController.deleteAppointment,
    (req, res) => {
        if (req.admin || req.counselor) {
            res.redirect(`/bookinglist`);
        } else if (req.user) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/userlist",
    isLoggedInController,
    userlistController.getUserlist,
    (req, res) => {
        if (req.admin) {
            if (req.userlist) {
                res.render("userlist", {
                    user: req.admin,
                    role: req.role,
                    userlist: req.userlist,
                });
            } else {
                res.render("userlist", {
                    user: req.admin,
                    role: req.role,
                    userlist: "",
                });
            }
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/userlist/:uId",
    isLoggedInController,
    userlistController.deleteUser,
    (req, res) => {
        if (req.admin) {
            res.redirect(`/userlist`);
        } else if (req.user || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/counselorlist",
    isLoggedInController,
    counselorlistController.getCounselorlist,
    (req, res) => {
        if (req.admin) {
            if (req.counselorlist) {
                res.render("counselorlist", {
                    user: req.admin,
                    role: req.role,
                    counselorlist: req.counselorlist,
                });
            } else {
                res.render("counselorlist", {
                    user: req.admin,
                    role: req.role,
                    counselorlist: "",
                });
            }
        } else {
            res.render("index");
        }
    }
);

router.post(
    "/counselorlist",
    isLoggedInController,
    counselorlistController.createCounselor,
    (req, res) => {
        if (req.admin) {
            res.redirect(`/counselorlist`);
        } else if (req.user || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/counselorlist/:cId",
    isLoggedInController,
    counselorlistController.deleteCounselor,
    (req, res) => {
        if (req.admin) {
            res.redirect(`/counselorlist`);
        } else if (req.user || req.counselor) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);


router.get(
    "/courselist",
    isLoggedInController,
    courselistController.getCourselist,
    (req,res) => {
        if(req.admin){
            if (req.courselist) {
                res.render("courselist", {
                    user: req.admin,
                    role: req.role,
                    courselist: req.courselist,
                });
            } else {
                res.render("courselist", {
                    user: req.admin,
                    role: req.role,
                    courselist: "",
                });
            }
        } else if (req.user) {
            res.redirect("/");
        } else{
            res.render("index");
        }
    }
);

router.post(
    "/courselist",
    isLoggedInController,
    courselistController.createCourseBooking,
    (req, res) => {
        if (req.admin) {
            res.redirect(`/courselist`);
        } else if (req.user) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get(
    "/courselist/:cId/:uId",
    isLoggedInController,
    courselistController.deleteAppointment,
    (req, res) => {
        if (req.admin ) {
            res.redirect(`/courselist`);
        } else if (req.user) {
            res.redirect("/");
        } else {
            res.render("index");
        }
    }
);

router.get("/logout", logoutController);
module.exports = router;
