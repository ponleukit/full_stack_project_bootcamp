import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000/api/";

class TasksService{
    static  async getPost(){
        return axios.get('/taskslist')
    }
    static async insertPost(task){
        return axios.post('/taskslist', {
            task
        })
    }

    static async deletePost(id){
        return axios.delete(`/taskslist/${id}`)
    }
}

export default TasksService;