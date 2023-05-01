import { createStore } from "vuex";
import journal from '../modules/daybook/store/journal'


const store = createStore({
    modules:{
        // journal: journalModele,
        journal
    }
});

export default store
