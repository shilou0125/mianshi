<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {RouterView,RouterLink} from 'vue-router'

</script>

<template>
 
    
<div class="total">
  <div class="header">
    <div class="act" >
       <RouterLink :to="{path:'/a'}" class="actc">a</RouterLink>
       <RouterLink :to="{path:'/b'}" class="actc">b</RouterLink>
       <RouterLink :to="{path:'/c'}" class="actc">c</RouterLink>
       </div>
  </div>
  <div class="main"><RouterView></RouterView></div>
  <div></div>
</div>


</template>

<style scoped>
.actc{
  
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: rgb(51, 107, 107);
}
.act{
display: flex;
  background-color: rgb(178, 216, 128);
  
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 900px;
  background-color: rgb(179, 138, 226);
}
.main{
  display: flex;
  height: 800px;
  width: 800px;
  background-color: rgb(197, 184, 110);
}
.total{
  background-color: rgb(48, 120, 182);
  height: 1000px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
