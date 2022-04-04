import {defineComponent} from 'vue'
import Test from "@/components/Test";

export default defineComponent({
    name: 'Login',
    setup(props, ctx) {
        return () => (
            <>
                <h1>Login</h1>
                <Test/>
            </>
        );
    }
})
