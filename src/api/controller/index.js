import Task from '../models/task';

const sortList = (arr) => {
    return arr.sort((a, b) => a.priority < b.priority);
}

exports.add = async (req, res) => {
    try{
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(200).json({ message: "ok" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

exports.getList = async (req, res) => {
    try{
        let todoList = await Task.find();
        res.status(200).json({ 
            todo:sortList(todoList)
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }  
}

exports.removeTask = async (req, res) => {
    try{
        await Task.remove({ _id: req.params.id })
        // let todoList = await Task.find();
        // res.status(200).json({ 
        //     todo:sortList(todoList)
        // });
        res.status(200).json({ message: "ok" });
    } catch (error) {
        res.status(500).json({ message: error });
    }   
}

