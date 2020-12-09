const mongoose = require("mongoose");

const Course = require("../models/course");

function addCourse(body){
 return new Promise((resolve,reject)=>{
     let course = new Course({
         title: body.title,
         faculty: body.faculty,
         level: body.level,
         teacherName: body.teacherName
     });
     course.save((err)=>{
        if(err) reject(err)
        else{
            resolve(course);
        }
     });

 });
}

function deleteCourse(id){
    return new Promise((resolve,reject)=>{
        Course.findOneAndDelete({_id: mongoose.Types.ObjectId(id)},(err,deletedCourse)=>{
            if(err) reject(err);
            resolve(deletedCourse);
        });
    });

}

function getAll(){
    return Course.find();
}


module.exports = {addCourse, deleteCourse , getAll};