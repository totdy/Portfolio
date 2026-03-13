<template>
    <div>        
        <img :src="baseUrl + '/assets/icons/' + img" :alt="title + ' icon'" :title="title">
        <p>{{ title }}</p>
    </div>    
</template>

<script setup lang="ts">
    const props = defineProps({
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    })

    const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>

  div{    
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img{
    width: 3rem;
  }
</style>