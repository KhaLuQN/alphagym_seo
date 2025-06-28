<template>
  <section id="billboard" class="relative">
    <div class="button-container">
      <button class="prev slick-arrow">
        <i class="icon icon-angle-left"></i>
      </button>
      <button class="next slick-arrow">
        <i class="icon icon-angle-right"></i>
      </button>
    </div>

    <div class="slider">
      <div class="slider-item">
        <div class="container">
          <div class="row">
            <div class="text-content light offset-md-5">
              <h2>
                <strong class="colored">Hard Work</strong> is for Every Success
              </h2>
              <p>
                <em
                  >Start by taking inspirations, continue it to give
                  inspirations</em
                >
              </p>
              <div class="pix_btn">
                <a href="#" class="hvr-shutter-in-horizontal mt-3">BẮT ĐẦU</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item">
        <div class="container">
          <div class="row">
            <div class="text-content light offset-md-5">
              <h2>
                <strong class="colored">Achieve</strong> Your Fitness Goals
              </h2>
              <p><em>Your only limit is you. Let's break it together.</em></p>
              <div class="pix_btn">
                <a href="#" class="hvr-shutter-in-horizontal mt-3"
                  >Get Started</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item">
        <div class="container">
          <div class="row">
            <div class="text-content light offset-md-5">
              <h2>
                <strong class="colored">Unleash</strong> Your Inner Strength
              </h2>
              <p><em>Sweat, smile, and repeat.</em></p>
              <div class="pix_btn">
                <a href="#" class="hvr-shutter-in-horizontal mt-3">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

// Logic khởi tạo chỉ dành cho slider này
onMounted(() => {
  if (
    process.client &&
    window.jQuery &&
    typeof window.jQuery.fn.slick !== "undefined"
  ) {
    $(".slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: $(".prev"), // Sử dụng nút điều hướng đã có trong template
      nextArrow: $(".next"),
    });
    console.log("Hero Slider initialized!");
  }
});
</script>
