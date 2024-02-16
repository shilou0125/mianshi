import { defineStore} from "pinia";
import axios from 'axios';
import {nanoid} from 'nanoid'
export const useLoveTalkStore=defineStore('LoveTalk',{
    actions:
    {
        async getTalk(){
            let result=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

           let obj={id:nanoid(),content:result.data.content}
            this.talk.unshift(obj)
        }
    },
    state(){
        return{
            talk:JSON.parse(localStorage.getItem('talkList') as string)||[]
        }
    }
}) 