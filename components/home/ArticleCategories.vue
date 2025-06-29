<template>
  <section class="services row">
    <div
      v-for="ArticleCategories in ArticleCategories"
      :key="ArticleCategories.id"
      class="workout-box front-dark col-md-6 p-0"
    >
      <img
        :src="ArticleCategories.cover_image_url"
        :alt="ArticleCategories.name"
        class="fitnessImg"
      />
      <div class="text-content light">
        <h3 class="colored">{{ ArticleCategories.name }}</h3>
        <p>{{ ArticleCategories.description }}</p>
        <div class="pix_btn">
          <a
            href="#"
            class="btn btn-effects"
            :data-target="`#modal-${ArticleCategories.slug}`"
            data-toggle="modal"
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
            </svg>
            Xem thêm
            <i class="icon icon-arrow-thin-right hvr-icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  ArticleCategories: { type: Array, required: true },
});
</script>

<style scoped></style>
