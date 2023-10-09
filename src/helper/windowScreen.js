// useWindowSize.js
import { ref, onMounted, onUnmounted } from 'vue';

export default function windowScreenSize(mobileWidth = 576) {
    let isMobile = ref(false);

    const refreshScreenSize = function (e) {
        isMobile.value = e.target.innerWidth < 500;
        // console.log(isMobile.value);
    };
    
    onMounted(() => {
      window.addEventListener("resize", refreshScreenSize);
    });
    
    onUnmounted(() => {
      window.removeEventListener("resize", refreshScreenSize);
    });

    return {isMobile};
}
