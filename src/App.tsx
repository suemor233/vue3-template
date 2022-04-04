import {defineComponent} from 'vue'
import Test from "@/components/Login";

export default defineComponent({
    name: 'App',
    setup(props, ctx) {
        return () => (
            <>
                <router-view/>
            </>
        );
    }
})
