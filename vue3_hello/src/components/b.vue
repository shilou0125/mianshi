<script setup lang="ts">
import Count  from '@/components/Count.vue';
import LoveTalk from './LoveTalk.vue';
</script>

<template>
  <div class="person">
<Count></Count>
<div class="a"></div>
<LoveTalk></LoveTalk>
  </div>
</template>

<style scoped>
.person{
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
.a{
 height:20px
}
</style>
