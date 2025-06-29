<template>
  <section class="our-trainers pb-60">
    <h2 class="section-title text-center mb-4">HUẤN LUYỆN VIÊN</h2>
    <div class="container">
      <div class="row">
        <!-- Bắt đầu vòng lặp v-for để hiển thị mỗi HLV -->
        <div class="trainer_slider">
          <div
            v-for="trainer in trainers"
            :key="trainer.id"
            class="col-md-3 text-center mb-5"
          >
            <figure>
              <NuxtLink :to="`/huan-luyen-vien/${trainer.id}`">
                <img
                  :src="trainer.photo_url"
                  :alt="trainer.full_name"
                  class="teamImg"
                />
              </NuxtLink>
            </figure>
            <div class="text-content text-center mt-3">
              <h4>
                <NuxtLink :to="`/huan-luyen-vien/${trainer.id}`">{{
                  trainer.full_name
                }}</NuxtLink>
              </h4>

              <span class="designation colored-grey">{{
                trainer.specialty
              }}</span>

              <p>{{ trainer.bio }}</p>

              <div class="dark social-links d-flex justify-content-center">
                <ul class="list-unstyled d-flex">
                  <li v-if="trainer.facebook_url" class="me-3">
                    <a
                      :href="trainer.facebook_url"
                      target="_blank"
                      title="Facebook"
                      ><i class="icon icon-facebook m-1"></i
                    ></a>
                  </li>
                  <li v-if="trainer.instagram_url" class="me-3">
                    <a
                      :href="trainer.instagram_url"
                      target="_blank"
                      title="Instagram"
                      ><i class="icon icon-instagram m-1"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pix_btn light text-center mt-3">
        <NuxtLink to="/huan-luyen-vien" class="hvr-shutter-in-horizontal mt-3"
          >Xem tất cả</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  trainers: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  if (
    process.client &&
    window.jQuery &&
    typeof window.jQuery.fn.slick !== "undefined"
  ) {
    const slider = $(".trainer_slider");
    slider.slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    });

    const equalizeSlideHeights = () => {
      let maxHeight = 0;
      slider.find(".membership-box").css("height", "auto");

      slider.find(".membership-box").each(function () {
        if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();
        }
      });

      slider.find(".membership-box").height(maxHeight);
    };

    nextTick(() => {
      equalizeSlideHeights();
    });

    slider.on("setPosition", function () {
      equalizeSlideHeights();
    });
  }
});
</script>

<style scoped>
figure img {
  display: block;
  margin: 0 auto;
}

.teamImg {
  width: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.teamImg:hover {
  transform: scale(1.05);
}
.social-links a {
  font-size: 1.2rem;
}
.text-content p {
  min-height: 72px;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  overflow: hidden;
}
.me-3 {
  margin-right: 1rem;
}
.divcenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
