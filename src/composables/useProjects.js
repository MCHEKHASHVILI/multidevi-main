import { ref } from "vue"
import axios from 'axios'

export default function useProjects(){

    const projects = ref([])

    const lastProjects = ref([]);  // Get the last four elements of the posts array

    async function getProjects(){
        let { data } = await axios.get('http://multidevadmin.laradevtest.com/api/projects')

        projects.value = data

        lastProjects.value = projects.value.filter(val => (val.avatar)).slice(-4)

    }

    return {
        projects,
        lastProjects,
        getProjects,
    }
}