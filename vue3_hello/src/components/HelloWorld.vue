<script setup lang="ts">
import {watch, ref, reactive} from 'vue'
import { type person ,type persons} from '../types'
let p=reactive<person>([{id:2,name:'shilou'},{id:1,name:'shilou'}])
let a:persons={id:3,name:"sds"}
</script>

<template>
  <div class="person">

  </div>
</template>

<style scoped>
.person{
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
