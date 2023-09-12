import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default function useNavigation() {
    const route = useRoute();
    const navbarComponents = ref([
        { name: "Home", to: "/", current: false },
        { name: "Services", to: "", current: false },
        { name: "Our Work", to: "/our-work", current: false },
        { name: "Blog", to: "/blog", current: false },
    ]);

    const footerLearnMore = ref([
        {name: "Home"},
        {name: "Custom Websites"},
        {name: "Search Engine Optimization"},
        {name: "Our Work"},
        {name: "Blog"},
        {name: "contact"},

    ])

    const footerContact = ref([
        {name: "Dallas Web Design"},
        {name: "Plano Web Design"},
        {name: "Frisco Web Design"},
        {name: "Fort Worth Web Design"},
        {name: "Allen Web Design"},
        {name: "McKinney Web Design"},
        {name: "Grapevine Web Design"},

    ])


    const dropdownIndex = 1;
    const dropDownVisible = ref(false);
    const show = (index) => {
        if (index === dropdownIndex) {
            dropDownVisible.value = true;
        }
    };
    const hide = (index) => {
        if (index === dropdownIndex) {
            dropDownVisible.value = false;
        }
    };
    const handleRouteChange = () => {
        navbarComponents.value.forEach((item) => {
            if (item.name === route.name) {
                item.current = true;
            }
        });
    };
    onMounted(() => {
        handleRouteChange();
    });

    watch(route, handleRouteChange);
    return {
        footerContact,
        navbarComponents,
        footerLearnMore,
        dropdownIndex,
        dropDownVisible,
        show,
        hide,
    };
}
