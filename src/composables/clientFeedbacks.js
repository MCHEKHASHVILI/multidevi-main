import { ref } from "vue"

export default (function feedbacks(){


    const clientFeedbacks = ref([
        {img: "https://gcdnb.pbrd.co/images/VozSoy67N3m1.png?o=1", comment: "1  Icepick was able to help us get a very difficult web redesign project across the finish line and continues to manage a large list of projects to help improve user experience and SEO. The team is knowledgeable, highly skilled and very responsive.", name:"Jennifer Hall", firm: "AegisLiving"},
        {img: "https://gcdnb.pbrd.co/images/VozSoy67N3m1.png?o=1", comment: "2 Icepick was able to help us get a very difficult web redesign project across the finish line and continues to manage a large list of projects to help improve user experience and SEO. The team is knowledgeable, highly skilled and very responsive.", name:"Jennifer Hall", firm: "AegisLiving"},
        {img: "https://gcdnb.pbrd.co/images/VozSoy67N3m1.png?o=1", comment: "3 Icepick was able to help us get a very difficult web redesign project across the finish line and continues to manage a large list of projects to help improve user experience and SEO. The team is knowledgeable, highly skilled and very responsive.", name:"Jennifer Hall", firm: "AegisLiving"},
        {img: "https://gcdnb.pbrd.co/images/VozSoy67N3m1.png?o=1", comment: "4 Icepick was able to help us get a very difficult web redesign project across the finish line and continues to manage a large list of projects to help improve user experience and SEO. The team is knowledgeable, highly skilled and very responsive.", name:"Jennifer Hall", firm: "AegisLiving"},
        {img: "https://gcdnb.pbrd.co/images/VozSoy67N3m1.png?o=1", comment: "5 Icepick was able to help us get a very difficult web redesign project across the finish line and continues to manage a large list of projects to help improve user experience and SEO. The team is knowledgeable, highly skilled and very responsive.", name:"Jennifer Hall", firm: "AegisLiving"},
        {img: "https://gcdnb.pbrd.co/images/VozSoy67N3m1.png?o=1", comment: "6 Icepick was able to help us get a very difficult web redesign project across the finish line and continues to manage a large list of projects to help improve user experience and SEO. The team is knowledgeable, highly skilled and very responsive.", name:"Jennifer Hall", firm: "AegisLiving"},

    ])


    let instance = {clientFeedbacks}

    return () => {
        return instance
    }


})