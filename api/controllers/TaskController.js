/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  add: function (req, res) {
    Task.create({
      name: req.param("name"),
      value: req.param("value"),
      author: req.param("me"),
      description: req.param("description"),
      status: 'active'
    }, function (err, newTask) {
      if (err) {
        return res.negotiate(err);
      }
      return res.json(newTask);
    })
  },
  changeStatus: function (req, res) {
    Task.update({
      id: req.param("id")
    }, {
      status: "finished"
    }, function (err, task) {
      if (err) {
        return res.negotiate(err)
      }
      return res.json(task)
    })
  },
  showAllActive: function (res, req) {
    Task.find({
      status: "active"
    }, function (err, list) {
      if (err)
        return res.negotiate(err)
      return res.json(list);
    })
  },
  showMyTasks: function (req, res) {
    Task.find({
      author: req.param("me")
    }, function (err, list) {
      if (err)
        return res.negotiate(err)
      return res.json(list);
    })
  },
  beExecutor: function (req, res) {
    Task.update({
        id: req.param("id")
      },
      {
        executors: req.param("me")
      }, function (err, task) {
        if (err) {
          return res.negotiate(err)
        }
        return res.json(task)
      }
    )
  },
  chooseWorker: function (req, res) {
    Task.update({
        id: req.param("id")
      },
      {
        worker: req.param("worker")
      }, function (err, task) {
        if (err) {
          return res.negotiate(err)
        }
        return res.json(task)
      })
  }
};

