'use strict';

module.exports = function(Tasks) {

    Tasks.returnUpdatedTasks = (index, arrayLength, cb) => {
        if(index + 1 === arrayLength) {
            Tasks.find({"order": "done ASC"}, (err, tasks) => {
                cb(null, tasks);
            });
        }
    }

    Tasks.purge = (checkedTasks, cb) => {
        checkedTasks.forEach((task, index, array) => {
            Tasks.destroyById(
                task.id,
                () => Tasks.returnUpdatedTasks(index, array.length, cb)
            );
        })
    }

    Tasks.done = (checkedTasks = [], cb) => {
        checkedTasks.forEach((task, index, array) => {
            Tasks.updateAll(
                { id: task.id },
                { done: !task.done },
                () => Tasks.returnUpdatedTasks(index, array.length, cb)
            );
        })
    }

    Tasks.remoteMethod('purge', {
        accepts: { arg: 'checkedTasks', type: 'array'},
        returns: { arg: 'tasks', type: 'array'}
    })

    Tasks.remoteMethod('done', {
        accepts: { arg: 'checkedTasks', type: 'array'},
        returns: { arg: 'tasks', type: 'array'}
    })

};
