<script setup>
import IpInfo from '@/components/IpInfo.vue'
import leaflet from 'leaflet'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const queryIp = ref('')
const ipInfo = ref(null)
let mymap

const getIpInfo = async () => {
  try {
    const data = await axios.get(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_Y4iM54htWecHxj6tHb3N9Y0xvkrlp&ipAddress=${queryIp.value}`
    )
    const result = data.data
    console.log(result)
    ipInfo.value = {
      address: result.ip,
      location: result.location.region,
      timezone: result.location.timezone,
      isp: result.isp,
      lat: result.location.lat,
      lng: result.location.lng
    }
    leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(mymap)
    mymap.setView([ipInfo.value.lat, ipInfo.value.lng], 14)
  } catch (error) {
    alert(error.message)
  }
}

onMounted(() => {
  mymap = leaflet.map('map').setView([24.15221, 120.6817], 14)
  leaflet
    .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
    .addTo(mymap)
})
</script>

<template>
  <div class="h-screen max-h-screen flex flex-col">
    <header class="bg-hero-pattern relative flex justify-center bg-cover px-4 pt-8 pb-32">
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            v-model="queryIp"
            type="text"
            class="flex-1 px-2 py-3 rounded-tl-xl rounded-bl-xl focus:outline-none"
            placeholder="Search for any IP address or domain"
          />
          <button
            @click="getIpInfo"
            class="bg-black text-white flex items-center px-4 rounded-tr-xl rounded-br-xl cursor-pointer"
            aria-label="search"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <IpInfo v-if="ipInfo" :ipInfo="ipInfo" />
    </header>

    <main id="map" class="h-full z-10"></main>
  </div>
</template>
