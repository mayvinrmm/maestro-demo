// flows/scripts/get_test_user.js
const response = http.get('https://jsonplaceholder.typicode.com/users/1');
const user = json(response.body);

output.testUser = {
    name: user.name,
    email: user.email
};
