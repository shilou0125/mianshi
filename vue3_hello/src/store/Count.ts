import {defineStore} from 'pinia'
export const useCountStore=defineStore('Count',{
    actions:{
      increment(val:any){
        this.sum+=val
      }  
    },
    state(){
        return{
            sum:6
        }
    }
}) 