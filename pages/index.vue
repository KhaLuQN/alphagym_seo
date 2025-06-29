<template>
  <HomeHeroSlider />

  <section class="about-us padding-medium bg-sand">
    <div class="container">
      <div class="row">
        <div class="section-header text-center">
          <h2 class="section-title pb-4">Giới thiệu</h2>
          <p>
            "Nơi bạn rèn luyện không chỉ thể lực – mà còn bản lĩnh!" "Chúng tôi
            không chỉ xây dựng cơ bắp, mà còn xây dựng ý chí."
          </p>
        </div>
        <div
          style="justify-content: center"
          class="iconbox-wrapper d-flex pt-4 p-sm-3"
        >
          <div class="iconbox col-md-4 text-center bg-white p-40 mb-3">
            <div class="iconbox-icon mb-3">
              <i class="icon icon-group"></i>
            </div>
            <div class="iconbox-content">
              <h3 class="colored">Huấn luyện viên chiến thắng</h3>
            </div>
          </div>
          <!--iconbox-->

          <div class="iconbox col-md-4 text-center bg-white p-40 mrl-3 mb-3">
            <div class="iconbox-icon mb-3">
              <i class="icon icon-price-tags"></i>
            </div>
            <div class="iconbox-content">
              <h3 class="colored">Giá cả hợp lý</h3>
            </div>
          </div>
          <!--iconbox-->

          <div class="iconbox col-md-4 text-center bg-white p-40 mb-3">
            <div class="iconbox-icon mb-3">
              <i class="icon icon-dumble"></i>
            </div>
            <div class="iconbox-content">
              <h3 class="colored">Thiết bị hiện đại</h3>
            </div>
          </div>
          <!--iconbox-->
        </div>
        <!--iconbox-wrapper-->
      </div>
    </div>
  </section>

  <HomeArticleCategories :ArticleCategories="ArticleCategories" />

  <section class="our-achievements padding-medium">
    <div class="section-header text-center">
      <h2 class="section-title pb-4">Our Achievements</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="flex-container">
          <div class="achievement-box mb-3">
            <div class="tracker mb-4">
              <span class="number">19</span>
            </div>
            <div class="iconbox-content text-center">
              <i class="icon icon-suitcase"></i>
              <h4>Các khóa đào tạo</h4>
            </div>
            <!--iconbox-->
          </div>
          <!--achievement-box-->
          <div class="achievement-box mb-3">
            <div class="tracker mb-4">
              <span class="number">879</span>
            </div>
            <div class="iconbox-content text-center">
              <i class="icon icon-clock2"></i>
              <h4>Giờ làm việc</h4>
            </div>
            <!--iconbox-->
          </div>
          <!--achievement-box-->
          <div class="achievement-box mb-3">
            <div class="tracker mb-4">
              <span class="number">150</span>
            </div>
            <div class="iconbox-content text-center">
              <i class="icon icon-users"></i>
              <h4>Khách hàng hài lòng</h4>
            </div>
            <!--iconbox-->
          </div>
          <!--achievement-box-->
          <div class="achievement-box mb-3">
            <div class="tracker mb-4">
              <span class="number">7</span>
            </div>
            <div class="iconbox-content text-center">
              <i class="icon icon-trophy"></i>
              <h4>Giải thưởng quốc tế</h4>
            </div>
            <!--iconbox-->
          </div>
          <!--achievement-box-->
        </div>
        <!--content-->
      </div>
    </div>
  </section>

  <HomeOurTrainers :trainers="trainers" />

  <HomeFeaturedPlans :plans="plans" />

  <HomeTestimonialSlider :testimonials="testimonials" />

  <HomePostSlider :posts="posts" />

  <section class="association-with padding-medium bg-sand">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="d-flex list-unstyled justify-content-between flex-wrap">
            <li>
              <a href="#"
                ><img src="/public/images/icon.png" class="brandImg"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="/public/images/icon1.png" class="brandImg"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="/public/images/icon2.png" class="brandImg"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="/public/images/icon3.png" class="brandImg"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="/public/images/icon4.png" class="brandImg"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const [
  trainersResponse,
  plansResponse,
  postsResponse,
  testimonialsResponse,
  ArticleCategoriesResponse,
] = await Promise.all([
  useApiFetch("/trainers"),
  useApiFetch("/membership-plans"),
  useApiFetch("/articles?limit=4"),
  useApiFetch("/testimonials"),
  useApiFetch("/article-categories"),
]);
const plans = ref(plansResponse.data.value?.data || []);
const trainers = ref(trainersResponse.data.value?.data || []);
const posts = ref(postsResponse.data.value?.data || []);
const testimonials = ref(testimonialsResponse.data.value?.data || []);
const ArticleCategories = ref(ArticleCategoriesResponse.data.value?.data || []);
</script>
