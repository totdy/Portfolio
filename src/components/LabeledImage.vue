<template>
    <div>        
        <img :src="'/assets/' + img" :alt="title" :title="title">
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