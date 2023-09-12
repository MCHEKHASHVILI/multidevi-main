import { ref } from "vue"

export default (function posts(){
    let openedQuestion = ref(null)
    const openQuestion = (questionId) =>{
        if(questionId===openedQuestion.value){
            openedQuestion.value = null
        }else{
            openedQuestion.value = questionId
            console.log("gaixsna")
            console.log(openedQuestion.value)
            console.log(questionId)


        }
    }
    const questions = ref([
        {id:0,question:'How long will it take for my website to be built?', answer: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur deleniti eligendi et numquam possimus provident voluptatum. Accusantium ad, eaque enim et eveniet illo iste magnam, modi quisquam, sapiente suscipit.\n'},
        {id:1,question:'Do I have a say in how my website looks?', answer: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur deleniti eligendi et numquam possimus provident voluptatum. Accusantium ad, eaque enim et eveniet illo iste magnam, modi quisquam, sapiente suscipit.\n'},
        {id:2,question:'What if I don’t have photos for my website?', answer: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur deleniti eligendi et numquam possimus provident voluptatum. Accusantium ad, eaque enim et eveniet illo iste magnam, modi quisquam, sapiente suscipit.\n'},
        {id:3,question:'Can I edit the content on the website myself?', answer: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur deleniti eligendi et numquam possimus provident voluptatum. Accusantium ad, eaque enim et eveniet illo iste magnam, modi quisquam, sapiente suscipit.\n'},
        {id:4,question:'Can you transfer blog content from my previous website?', answer: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur deleniti eligendi et numquam possimus provident voluptatum. Accusantium ad, eaque enim et eveniet illo iste magnam, modi quisquam, sapiente suscipit.\n'},
        {id:5,question:'Can I cancel anytime?', answer: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur deleniti eligendi et numquam possimus provident voluptatum. Accusantium ad, eaque enim et eveniet illo iste magnam, modi quisquam, sapiente suscipit.\n'},
        {id:6,question:'What happens after 24 months?', answer: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur deleniti eligendi et numquam possimus provident voluptatum. Accusantium ad, eaque enim et eveniet illo iste magnam, modi quisquam, sapiente suscipit.\n'},
        ]
    )
    return{
        questions,
        openQuestion,
        openedQuestion
    }
})