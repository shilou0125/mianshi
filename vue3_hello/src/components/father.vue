<script setup lang="ts">
import child from '@/components/child.vue'
import {ref} from 'vue'
let toy=ref(['电脑','手机','手表'])
let toy1=ref("玩具车")
function gettoy(val:any){
console.log(val)
}
</script>

<template>
  <div class="person">
    父亲的玩具：<span v-for="item in toy">{{ item }}.</span><br>
    <button>把玩具给父亲玩</button>
<child :settoy="toy1" :setfather="gettoy"></child>
  </div>
</template>

<style scoped>
.person{

  background-color: rgb(118, 157, 174);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
