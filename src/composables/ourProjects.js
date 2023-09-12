import { ref } from "vue"

export default (function ourProjects(){
    const ourProjects = ref([

        {img: "https://onepagelove.imgix.net/2023/06/opl-master-7.jpg?w=540&max-h=540&fit=crop&fp-y=0&auto=compress", title: "Corewood Care", description: "Corewood Care is a privately owned\n" +
                "home care and care management\n" +
                "agency dedicated to providing\n" +
                "personalized and exceptional care\n" +
                "support services to individuals in familiar\n" +
                "surroundings.", background: "bg-gradient-to-b from-[#292929] to-[#000000]"},
        {img: "https://onepagelove.imgix.net/2023/06/opl-master-7.jpg?w=540&max-h=540&fit=crop&fp-y=0&auto=compress", title: "Corewood Care", description: "Corewood Care is a privately owned\n" +
                "home care and care management\n" +
                "agency dedicated to providing\n" +
                "personalized and exceptional care\n" +
                "support services to individuals in familiar\n" +
                "surroundings.", background: "bg-gradient-to-b from-[#2586BC] to-[#003F72]"},
        {img: "https://onepagelove.imgix.net/2023/06/opl-master-7.jpg?w=540&max-h=540&fit=crop&fp-y=0&auto=compress", title: "Corewood Care", description: "Corewood Care is a privately owned\n" +
                "home care and care management\n" +
                "agency dedicated to providing\n" +
                "personalized and exceptional care\n" +
                "support services to individuals in familiar\n" +
                "surroundings.", background: "bg-gradient-to-b from-[#F3C57A] to-[#F39369]"},
        {img: "https://onepagelove.imgix.net/2023/06/opl-master-7.jpg?w=540&max-h=540&fit=crop&fp-y=0&auto=compress", title: "Corewood Care", description: "Corewood Care is a privately owned\n" +
                "home care and care management\n" +
                "agency dedicated to providing\n" +
                "personalized and exceptional care\n" +
                "support services to individuals in familiar\n" +
                "surroundings.",background: "bg-gradient-to-b from-[#89BC51] to-[#62AC47]"},

    ])
    const lastFourProjects = ref(ourProjects.value.slice(-4)); // Get the last four elements of the posts array

    let instance = {ourProjects, lastFourProjects}

    return () => {
        return instance
    }


})