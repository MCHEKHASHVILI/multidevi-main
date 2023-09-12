import { ref } from "vue"

export default (function contact(){


    const contactInputs = ref([
        {name: "Name*", type: "text", required:"required"},
        {name: "Email*", type: "email" ,required:"required"},
        {name: "Company*", type: "text", required:"required"},
        {name: "Website URL", type: "url",required:""},
    ])



    let instance = {contactInputs}

    return () => {
        return instance
    }


})