import {defineStore} from 'pinia';

export const useLoadingStore = defineStore('loadingStore', {
    state: () => ({
        loading: false
    }),
    getters: {
        isLoading: (state) => state.loading
    },
    actions:{
        setLoad(loadVal){
            this.loading = loadVal; //true false
        }
    },
});