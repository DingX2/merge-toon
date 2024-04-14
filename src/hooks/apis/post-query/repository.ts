import axios from 'axios';

export class PostRepository {
    static getPost() {
        return axios.get('https://jsonplaceholder.typicode.com/todos');
    }
}
