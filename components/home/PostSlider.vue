<template>
  <section class="latest-blogs bg-black padding-medium light">
    <h2 class="section-title text-center mb-5">Blogs</h2>
    <div class="container">
      <div class="row">
        <div class="post-slider">
          <div v-for="post in posts" :key="post.id" class="post-item">
            <figure>
              <div class="blog-image-container">
                <img :src="post.image" :alt="post.title" class="blog-image" />
              </div>
            </figure>
            <div class="post-content pt-4">
              <span class="meta-date">{{
                formatDate(post.publishedDate)
              }}</span>
              <h3 class="post-title">
                <NuxtLink :to="`/bai-viet/${post.slug}`">{{
                  post.title
                }}</NuxtLink>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="pix_btn light text-center mt-3">
        <a href="#" class="hvr-shutter-in-horizontal mt-3">View All</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

onMounted(() => {
  if (
    process.client &&
    window.jQuery &&
    typeof window.jQuery.fn.slick !== "undefined"
  ) {
    $(".post-slider").slick({
      dots: false,
      arrows: false,

      infinite: true,
      speed: 300,
      slidesToShow: 4,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ],
    });
  }
});
</script>

<style scoped>
.post-item {
  padding: 0 15px;
}

.blog-image-container {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 0.5rem;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-item:hover .blog-image {
  transform: scale(1.05);
}

@media (max-width: 767px) {
  :deep(.slick-arrow) {
    display: none !important;
  }
}
</style>
