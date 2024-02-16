<script setup lang="ts">
import {ref} from 'vue'
let childtoy=ref('赛车')
let ab=defineProps(['settoy','setfather'])
let a=ab.settoy;
</script>

<template>
  <div class="person">
孩子的玩具：
<div>{{ a}}{{ settoy }}</div>
<button @click="setfather(childtoy)" >把玩具给父亲玩</button>  
  </div>
</template>

<style scoped>
.person{
  margin-top: 50px;
  width: 600px;
  background-color: rgb(179, 180, 181);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
