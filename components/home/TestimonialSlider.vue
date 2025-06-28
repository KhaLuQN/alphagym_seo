<template>
  <section class="testimonials-wrap mt-3 mb-5">
    <div class="section-header text-center p-30">
      <h2 class="section-title pb-4">Đánh giá của khách hàng</h2>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="testimonial-slider d-flex mb-6 flex-wrap justify-content-center"
        >
          <div
            class="col-md-4 testimonials-inner text-center"
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <figure>
              <img
                :src="testimonial.image_url"
                :alt="testimonial.customer_name"
                class="authorImg img-circle"
              />
            </figure>
            <p>{{ testimonial.content }}</p>
            <div class="testimonial-author">
              <span class="name colored">{{ testimonial.customer_name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from "vue";

const props = defineProps({
  testimonials: {
    type: Array,
    required: true,
  },
});

const handleImageError = (event) => {
  event.target.src = "/images/default-avatar.jpg";
};

onMounted(() => {
  if (
    process.client &&
    window.jQuery &&
    typeof window.jQuery.fn.slick !== "undefined"
  ) {
    $(".testimonial-slider").slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    });
  }
});
</script>
