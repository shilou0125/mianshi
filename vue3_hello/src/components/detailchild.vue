<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { defineProps } from 'vue';
const route=useRoute()
defineProps(['a'])
</script>

<template>
  <div class="person1">
{{ $attrs }}
{{ a }}
  </div>
</template>

<style scoped>
.person1{
  display: flex;
  width: 500px;
  height: 500px;
  background-color: rgb(204, 190, 190);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
