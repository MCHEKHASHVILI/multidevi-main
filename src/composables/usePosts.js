import { ref } from "vue"
import axios from "axios"

export default function usePosts(){
    const posts = ref([])
    const lastPosts = ref([])

    async function getPosts(){
        let { data } = await axios.get('http://multidevadmin.laradevtest.com/api/posts')

        posts.value = data,

        lastPosts.value = posts.value //.slice(-3)

        console.log(lastPosts)

    }

    return {
        posts,
        lastPosts,
        getPosts,
    }

}