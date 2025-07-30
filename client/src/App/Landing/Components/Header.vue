<script lang="ts" setup>
import Circle from '@Components/Shared/Atoms/Circle.vue';
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
    <div class="flex h-18 items-center justify-between px-6 md:px-18 lg:px-44">

      <Circle :simple="true" size="small" />

      <nav class="hidden md:flex items-center gap-10">
        <RouterLink to="/" class="text-gray-300 hover:text-emerald-500 transition-colors">Features</RouterLink>
        <RouterLink to="/" class="text-gray-300 hover:text-emerald-500 transition-colors">How it Works</RouterLink>
        <RouterLink to="/" class="text-gray-300 hover:text-emerald-500 transition-colors">Pricing</RouterLink>
        <RouterLink to="/" class="text-gray-300 hover:text-emerald-500 transition-colors">Testimonials</RouterLink>
      </nav>

      <div class="flex items-center gap-3">

      </div>

    </div>
  </header>
</template>