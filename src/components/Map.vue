<template>
    <div id="mapContainer" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue"
import L from "leaflet"

const mapContainer = useTemplateRef("mapContainer")

onMounted(() => {
    if (!mapContainer.value) return

    const map = L.map(
        mapContainer.value, 
        { 
            zoomControl: false 
        }
    ).setView([41.1579, -8.6291], 11)

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    {
        attribution: "OpenStreetMap | CARTO"
    }
    ).addTo(map)

})
</script>

<style scoped>
#mapContainer {
    height: 15rem;
    width: 100%;
    border-radius: 0.5rem;

}
</style>