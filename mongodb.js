const { MongoClient, ObjectID, ObjectId } = require('mongodb');

// Creating connection with Database
const connectionURL = 'mongodb://127.0.0.1:27017'; // Localhost seems to be slower than 127.0.0.1, bug issue
const databaseName = 'task-manager';
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database');
	}

	console.log('Connected correctly!');

	const db = client.db(databaseName); // Gives back database reference

	db
		.collection('tasks')
		.deleteOne({
			description: 'Task 1'
		})
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
});
