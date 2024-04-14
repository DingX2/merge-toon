import axios from 'axios';
import type { Post } from '@/types';

export class PostRepository {
    static getPost() {
        return axios.get<Post[]>('https://jsonplaceholder.typicode.com/todos');
    }
}
