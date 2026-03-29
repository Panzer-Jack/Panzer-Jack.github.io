<script setup lang="ts">
import main from '@/assets/images/main.jpg'
</script>

<template>
  <div
    class="bg-gothic-bg w-100vw h-100vh fixed z--1"
    :style="{ backgroundImage: `url(${main})`, backgroundSize: 'cover', backgroundPosition: '80%' }"
  />

  <div class="pointer-events-none fixed inset-0 z--1 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.26),_transparent_38%),linear-gradient(180deg,rgba(196,226,255,0.08),rgba(10,44,86,0.12)),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.18))]" />

  <RouterView />
</template>
