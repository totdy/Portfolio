<template>
    <div ref="mapContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import L from 'leaflet'

const mapContainer = ref<HTMLDivElement | null>(null)

onMounted(() => {
    if (!mapContainer.value) return

    const map = L.map(mapContainer.value, { zoomControl: false })
        .setView([41.1579, -8.6291], 11)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap &copy; CARTO'
    }
).addTo(map)

})
</script>

<style scoped>
div {
    height: 500px;
    width: 100%;
}
</style>