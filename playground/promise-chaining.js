require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete("5db299a536695519203f7bdc").then((task) => {
    console.log(task);

    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})