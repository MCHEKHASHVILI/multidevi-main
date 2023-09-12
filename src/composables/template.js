import {ref, shallowRef} from "vue"
import HostingIcon from "@/components/icons/templatePageIcons/advantages/hostingIcon.vue";
import FastIcon from "@/components/icons/templatePageIcons/advantages/fastIcon.vue";
import AnalyticsIcon from "@/components/icons/templatePageIcons/advantages/analyticsIcon.vue";
import EditsIcon from "@/components/icons/templatePageIcons/advantages/editsIcon.vue";
import SeoIcon from "@/components/icons/templatePageIcons/advantages/seoIcon.vue";
import ProfileIcon from "@/components/icons/templatePageIcons/advantages/profileIcon.vue";

export default (function template(){
    const advantages = shallowRef([
        {icon: HostingIcon, title: "Hosting Includes", description: "Hosting fees are built right into the monthly payment."},
        {icon: EditsIcon, title: "Unlimited Edits", description: "We’ll help you update any content or photos you might want\n" + "at any time!"},
        {icon: FastIcon, title: "Wicked Fast", description: "We know how to get your business ranking on Google and all\n" + "of our websites are built with SEO in mind."},
        {icon: SeoIcon, title: "SEO Friendly", description: "Since our websites are built from scratch, you can enjoy\n" + "blazing fast page speed scores which help your users stay on\n" + "your website but also rank higher with SEO."},
        {icon: AnalyticsIcon, title: "Google Analytics", description: "It’s important to track how your website is being used and\n" + "Google Analytics helps you understand exactly who your\n" + "users are and where they’re going."},
        {icon: ProfileIcon, title: "Google Business Profile", description: "We also help you set up Google Business Profile which is a\n" + "great tool for local businesses to get more leads."},
    ])
    const prices = ref([
        {type:"BASIC", price: 199, currency: "$", duration: "per month", advantages: ["Up to 5 Pages", "Hosting Included", "SEO Friendly", "Lifetime Updates", "24-month Service Minimum"]},
        {type:"STANDARD", price: 249,  currency: "$", duration: "per month", advantages: ["Up to 10 Pages", "Hosting Included", "SEO Friendly", "Lifetime Updates","Google Analytics Setup","Google Business Profile Setup", "24-month Service Minimum"]},
        {type:"PREMIUM", price: 299, currency: "$", duration: "per month", advantages: ["Up to 15 Pages", "Hosting Included", "SEO Friendly", "Lifetime Updates","Google Analytics Setup","Google Business Profile Setup", "24-month Service Minimum"]},
    ])
    const templateProjects = ref([
        {name: "ATM Sports", link:"google.com", img:'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/636ab102fd2b2c9ee8837103_thumbnail.jpeg'},
        {name: "ATM Sports", link:"google.com", img:'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/636ab102fd2b2c9ee8837103_thumbnail.jpeg'},
        {name: "ATM Sports", link:"google.com", img:'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/636ab102fd2b2c9ee8837103_thumbnail.jpeg'},
        {name: "ATM Sports", link:"google.com", img:'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/636ab102fd2b2c9ee8837103_thumbnail.jpeg'},
        {name: "ATM Sports", link:"google.com", img:'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/636ab102fd2b2c9ee8837103_thumbnail.jpeg'},
    ])
    const favTemplateProjects = ref([
        {name: "ATM Sports", link:"https://www.facebook.com/", img:'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/636ab102fd2b2c9ee8837103_thumbnail.jpeg'},
        {name: "ATM Sports", link:"https://www.facebook.com/", img:'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/636ab102fd2b2c9ee8837103_thumbnail.jpeg'},
        {name: "ATM Sports", link:"https://www.facebook.com/", img:'https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/636ab102fd2b2c9ee8837103_thumbnail.jpeg'},
    ])
    let instance = {advantages, templateProjects,favTemplateProjects, prices}
    return () => {
        return instance
    }
})