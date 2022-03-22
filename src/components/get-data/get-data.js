const axios = require('axios');
const arrayString = require('../array-string/array-string');

const getData = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		const userIds = response.data.map((user) => user.id);

		return arrayString(userIds);
	} catch (e) {

	}

};

module.exports = getData;
