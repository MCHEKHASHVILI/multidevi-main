import { ref } from "vue"

export default (function posts(){
    const posts = ref([
        {innerText:"Text for post",img: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",id: 0, uploaderImg:'src/components/images/user.png', title: "Custom WordPress Development: A Comprehensive Guide", publisher: 'Nick Meagher', date: 'May 11, 2023', description: 'Whether you’re running an advertising campaign or just wantto spice up your landing pages, we’ve created a list of 10 Landing Page Do’s and Don’ts to help!'},
        {innerText:"Text for post",img: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",id: 1, uploaderImg:'src/components/images/user.png', title: "Custom WordPress Development: A Comprehensive Guide", publisher: 'Nick Meagher', date: 'May 11, 2023', description: 'Whether you’re running an advertising campaign or just wantto spice up your landing pages, we’ve created a list of 10 Landing Page Do’s and Don’ts to help!'},
        {innerText:"Text for post",img: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",id: 2, uploaderImg:'src/components/images/user.png', title: "Custom WordPress Development: A Comprehensive Guide", publisher: 'Nick Meagher', date: 'May 11, 2023', description: 'Whether you’re running an advertising campaign or just wantto spice up your landing pages, we’ve created a list of 10 Landing Page Do’s and Don’ts to help!'},
        {innerText:"Text for post",img: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",id: 3, uploaderImg:'src/components/images/user.png', title: "Custom WordPress Development: A Comprehensive Guide", publisher: 'Nick Meagher', date: 'May 11, 2023', description: 'Whether you’re running an advertising campaign or just wantto spice up your landing pages, we’ve created a list of 10 Landing Page Do’s and Don’ts to help!'},
        {innerText:"Text for post",img: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",id: 4, uploaderImg:'src/components/images/user.png', title: "Custom WordPress Development: A Comprehensive Guide", publisher: 'Nick Meagher', date: 'May 11, 2023', description: 'Whether you’re running an advertising campaign or just wantto spice up your landing pages, we’ve created a list of 10 Landing Page Do’s and Don’ts to help!'},
        {innerText:"Text for post",img: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",id: 5, uploaderImg:'src/components/images/user.png', title: "Custom WordPress Development: A Comprehensive Guide", publisher: 'Nick Meagher', date: 'May 11, 2023', description: 'Whether you’re running an advertising campaign or just wantto spice up your landing pages, we’ve created a list of 10 Landing Page Do’s and Don’ts to help!'},
        {innerText:"Text for post",img: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",id: 6,uploaderImg:'src/components/images/user.png', title: "last post", publisher: 'Nick Meagher', date: 'May 11, 2023', description: 'In this blog post, we will discuss ten simple ways you can\n' + 'improve your website copy and boost your conversions!'},
    ])
    const lastThreePosts = ref(posts.value.slice(-3)); // Get the last four elements of the posts array
    let instance = {posts,lastThreePosts}
    return () => {
        return instance
    }

})