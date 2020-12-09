const courseService = require("../services/courseService");
exports.addCourse=(req, res) => {
    const course = req.body;
    courseService.addCourse(course).then((newCourse) => {
        return res.status(200).json({
            msg: "Course added successfully !",
            data: newCourse
        });
    }).catch(err => {
        return res.status(200).json({
            msg: err.message
        });
    });
};

exports.deleteCourse=(req, res) => {
    const id = req.params.id;
    courseService.deleteCourse(id).then((deletedCourse) => {
        return res.status(200).json({
            msg: "Course deleted successfully !",
            data: deletedCourse
        });
    }).catch(err => {
        return res.status(500).json({
            msg: err.message
        });
    });
};


exports.getAllCourses = (req,res)=>{
    courseService.getAll().then((result)=>{
       return res.status(200).json({data: result});
    }).catch((err)=>{
       return res.status(500).json({err : err.message});
    });
}

