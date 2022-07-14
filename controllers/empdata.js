const Model = require('../model/model');

exports.create = async (req, res) => {
    const data = new Model({
        name: req.body.name,
        salary: req.body.salary,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.index = async (req, res) => {

    // res.render('home', {
    //     title: 'View Engine Demo'
    // })
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.GetOneRecord = async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updateRecord = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options)

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}

exports.deleteRecord = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Record with name of ${data.name} is delete suceessfully `)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}
