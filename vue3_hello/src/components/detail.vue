<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import {ref} from 'vue'
import detailchild from './detailchild.vue';
const route=useRoute()
let a=ref("a")
</script>

<template>
  <div class="person">
{{ route.params.ad }}
{{ route.params.bd }}
<detailchild :a="a"></detailchild>
  </div>
</template>

<style scoped>
.person{
  display: flex;
  width: 500px;
  height: 500px;
  background-color: rgb(238, 149, 149);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
