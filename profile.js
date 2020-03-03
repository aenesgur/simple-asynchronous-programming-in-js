const urlUser='https://jsonplaceholder.typicode.com/users?username=';
const urlTodos='https://jsonplaceholder.typicode.com/todos?userId=';

class Profile{

    async getProfile(username){
        const profileResponse = await fetch(urlUser+username);
        const profile = await profileResponse.json();
        return {profile}
    }

    async getTodoListFromProfile(profileId){
        const todoResponse = await fetch(urlTodos+profileId);
        const todo = await todoResponse.json();
        return {todo}
    }
}