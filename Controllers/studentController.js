const Student = require('../Models/studentModel')

const getAllData = async (req, res) => {
    const students = await Student.find()

    if (students) {
        res.status(200).json(students)
    } else {
        res.status(400).json({mssg : "coudn't find the data"})
    }
}

const getSingleData = async (req, res) => {
    let id = req.params.id 

    
    try {
        const data = await Student.findById(id)
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}

const createData = async (req, res) => {
    let data = req.body

    try {
        const student = await Student.create(data)
        res.status(201).json(student)
    } catch (err) {
        res.status(400).json(err)
    }

    
}

const updateData = async (req, res) => {
    const { name, age, grade, email } = req.body
    const id = req.params.id

    try {
        const student = await Student.findById(id)
        if (student) {
            student.name = name
            student.age = age 
            student.grade = grade
            student.email = email
            res.status(200).json(student) 
        }
    } catch(err) {
        res.status(400).json(err)
    }

}

const deleteData = async (req, res) => {
    const id = req.params.id

    try {
        await Student.findOneAndDelete(id)
        res.status(200).json({mssg: "data deleted successfully"})
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getAllData,
    getSingleData,
    createData,
    updateData,
    deleteData
}