import { defineStore } from "pinia";


export const useKipimo = defineStore('kipimo', {
    state: () => ({
        isLogin: false
    }),
    actions: {
        setLogin(value){
            this.isLogin = value
        }
    }
})