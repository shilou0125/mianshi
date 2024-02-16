<script setup lang="ts">
import { ref } from 'vue';
import {useCountStore} from '@/store/Count'
const countStore=useCountStore()
console.log(countStore.sum)
let n=ref(1)
let add=function(){
    countStore.increment(n.value)
}
let reduce=function(){
  countStore.sum-=n.value
}
</script>

<template>
  <div class="person">
<div><h2>当前求和：{{countStore.sum}}</h2>
<select v-model.number="n">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
<button @click="add">增加</button>
<button @click="reduce">减少</button>
</div>
  </div>
</template>

<style scoped>
.person{
    display: flex;
    flex-direction: column;
    width: 500px;
  background-color: rgb(111, 208, 195);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
