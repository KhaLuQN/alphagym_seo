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
                <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
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

// SỬA 2: Thêm hàm để định dạng ngày tháng
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  // Lấy ngày, tháng, năm và định dạng lại
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
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

/* SỬA 1: Thêm CSS để ảnh có cùng kích thước */
.blog-image-container {
  width: 100%;
  aspect-ratio: 16 / 10; /* Giữ tỉ lệ khung hình 16:10, bạn có thể đổi thành 4/3 hoặc 1/1 */
  overflow: hidden; /* Ẩn phần ảnh thừa */
  border-radius: 0.5rem; /* Bo góc ảnh cho đẹp hơn (tùy chọn) */
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Đây là thuộc tính quan trọng: ảnh sẽ lấp đầy khung mà không bị méo */
  transition: transform 0.3s ease;
}

.post-item:hover .blog-image {
  transform: scale(1.05); /* Thêm hiệu ứng zoom nhẹ khi di chuột (tùy chọn) */
}

/* Ẩn các nút trên màn hình điện thoại để không chiếm diện tích */
@media (max-width: 767px) {
  :deep(.slick-arrow) {
    display: none !important;
  }
}
</style>
