<script setup lang="ts">

import {ref} from 'vue'
import { useLoveTalkStore } from '@/store/LoveTalk';
const t=useLoveTalkStore()
t.$subscribe((mutate,state)=>{
localStorage.setItem('talkList',JSON.stringify(state.talk))
})
 function gettalk(){
   t.getTalk()
}

</script>

<template>
  <div class="person">
    <button @click="gettalk">得到一句话</button>
    <ul>
        <li v-for="item in t.talk" :key="item.id">{{ item.content }}</li>
    </ul>

  </div>
</template>

<style scoped>
.person{
  background-color: rgb(168, 212, 97);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
