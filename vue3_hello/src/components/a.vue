<script setup lang="ts">
import { RouterView ,RouterLink} from 'vue-router';
import { ref } from 'vue';
let arr=ref([{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'}])
</script>

<template>
  <div class="person">
<ul>
  <li v-for="item in arr"><RouterLink class="act" :to="{
    name:'detail',
    params:{
      ad:item.id ,
      bd:item.name
    }
}">
{{ item.id }}
</RouterLink></li>
  
</ul>
<RouterView></RouterView>
  </div>
</template>

<style scoped>


.act{
  display: flex;
  height: 50px;
  width:50px;
  background-color: azure;
  margin-bottom: 5px;
}
.person{
  display: flex;
  width: 900px;
  margin-left: 100px;
  background-color: rgb(93, 181, 216);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
