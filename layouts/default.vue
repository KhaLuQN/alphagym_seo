<template>
  <div id="body-wrapper">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "~/components/shared/TheHeader.vue";
import TheFooter from "~/components/shared/TheFooter.vue";
</script>
