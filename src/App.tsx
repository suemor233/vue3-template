import {defineComponent} from 'vue'
import 'reset-css';

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
