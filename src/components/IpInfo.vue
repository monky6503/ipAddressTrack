<script setup>
import { defineProps } from 'vue'
defineProps({
  ipInfo: {
    type: Object
  }
})
</script>

<template>
  <div
    class="absolute -bottom-64 md:-bottom-16 flex flex-col md:flex-row bg-white gap-x-12 gap-y-4 px-8 pt-8 pb-12 rounded-xl border z-20"
  >
    <div class="flex flex-col items-center md:items-start font-medium">
      <h3 class="text-xs text-[#969696] mb-2 uppercase">IP Address</h3>
      <span class="text-2xl">{{ ipInfo.address }}</span>
    </div>
    <div class="flex flex-col items-center md:items-start font-medium">
      <h3 class="text-xs text-[#969696] mb-2 uppercase">Location</h3>
      <span class="text-2xl">{{ ipInfo.location }}</span>
    </div>
    <div class="flex flex-col items-center md:items-start font-medium">
      <h3 class="text-xs text-[#969696] mb-2 uppercase">Timezone</h3>
      <span class="text-2xl">{{ ipInfo.timezone }}</span>
    </div>
    <div class="flex flex-col items-center md:items-start font-medium">
      <h3 class="text-xs text-[#969696] mb-2 uppercase">Isp</h3>
      <span class="text-2xl">{{ ipInfo.isp }}</span>
    </div>
  </div>
</template>
