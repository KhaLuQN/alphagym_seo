<template>
  <section class="membership padding-medium light front-dark">
    <div class="membership-background"></div>

    <div class="membership-wrapper padding-medium">
      <h2 class="section-title text-center mb-5">GÓI TẬP</h2>
      <p class="section-subtitle text-center mb-5">
        Chọn gói tập phù hợp với nhu cầu của bạn
      </p>

      <div class="container">
        <div class="row">
          <div class="plan-slider">
            <div v-for="plan in plans" :key="plan.id" class="p-3">
              <div class="membership-box mb-3">
                <div v-if="plan.discount_percent > 0" class="popular-badge">
                  KHUYẾN MÃI
                </div>

                <div class="heading-box">
                  <h3 class="plan-title text-center">{{ plan.name }}</h3>
                </div>

                <div class="text-content">
                  <div class="inclusion">
                    <p class="plan-description p-3">
                      {{
                        plan.description ||
                        "Chưa có mô tả chi tiết cho gói tập này."
                      }}
                    </p>
                  </div>

                  <div class="meta-price">
                    <div class="price-container text-center">
                      <span
                        v-if="plan.discount_percent > 0"
                        class="original-price"
                      >
                        {{
                          new Intl.NumberFormat("vi-VN").format(
                            calculateOriginalPrice(plan)
                          )
                        }}
                        VNĐ
                      </span>

                      <div class="current-price">
                        <span class="currency">VNĐ</span>
                        <span class="price-amount">{{
                          new Intl.NumberFormat("vi-VN").format(plan.price)
                        }}</span>
                        <span class="duration"
                          >/ {{ plan.durationDays }} ngày</span
                        >
                      </div>

                      <span
                        v-if="plan.discount_percent > 0"
                        class="discount-badge"
                      >
                        Tiết kiệm {{ plan.discount_percent }}%
                      </span>
                    </div>
                  </div>

                  <div class="pix_btn text-center">
                    <NuxtLink
                      :to="`/dang-ky?plan_id=${plan.plan_id}`"
                      class="register-btn hvr-shutter-in-horizontal mt-4"
                    >
                      <span class="btn-icon">🏋️</span>
                      Đăng ký ngay
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from "vue";

const props = defineProps({
  plans: { type: Array, required: true },
});

const calculateOriginalPrice = (plan) => {
  if (plan.discount_percent > 0 && plan.discount_percent < 100) {
    return Math.round(plan.price / (1 - plan.discount_percent / 100));
  }
  return plan.price;
};

onMounted(() => {
  if (
    process.client &&
    window.jQuery &&
    typeof window.jQuery.fn.slick !== "undefined"
  ) {
    const slider = $(".plan-slider");
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
/* Background styling */
.membership {
  position: relative;
  overflow: hidden;
}

.membership-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(220, 20, 60, 0.1) 0%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(220, 20, 60, 0.1) 100%
  );
  background-image: radial-gradient(
      circle at 20% 20%,
      rgba(220, 20, 60, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(220, 20, 60, 0.1) 0%,
      transparent 50%
    ),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="gym" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(220,20,60,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23gym)"/></svg>');
  z-index: 1;
}

.membership-wrapper {
  position: relative;
  z-index: 2;
}

/* Section title styling */
.section-title {
  font-size: 3rem;
  font-weight: bold;
  color: #dc143c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #dc143c, #ff6b6b);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

/* Membership box styling */
.membership-box {
  border: 3px solid #dc143c;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(220, 20, 60, 0.1), 0 6px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.membership-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(220, 20, 60, 0.1),
    transparent
  );
  transition: left 0.6s;
}

.membership-box:hover::before {
  left: 100%;
}

.membership-box:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(220, 20, 60, 0.2), 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: #ff1744;
}

/* Popular badge */
.popular-badge {
  position: absolute;
  top: -5px;
  right: 20px;
  background: linear-gradient(45deg, #dc143c, #ff1744);
  color: white;
  padding: 8px 20px;
  border-radius: 0 0 15px 15px;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px rgba(220, 20, 60, 0.3);
  z-index: 3;
}

/* Heading box */
.heading-box {
  margin: -3px -3px 0 -3px;
  padding: 25px 20px;
  border-radius: 17px 17px 0 0;
}

.plan-title {
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
}

/* Content area */
.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.plan-description {
  line-height: 1.6;
  font-size: 1rem;
  min-height: 120px;
  display: flex;
  align-items: center;
  text-align: center;

  border-radius: 10px;
  margin: 0;
  border: 1px solid rgba(220, 20, 60, 0.1);
}

/* Price styling */
.price-container {
  margin: 20px 0;
  padding: 20px;
  background: rgba(220, 20, 60, 0.05);
  border-radius: 15px;
  border: 2px dashed rgba(220, 20, 60, 0.2);
}

.original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 1rem;
  display: block;
  margin-bottom: 10px;
}

.current-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;
}

.currency {
  font-size: 1rem;
  color: #dc143c;
  font-weight: bold;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: bold;
  color: #dc143c;
  line-height: 1;
}

.duration {
  font-size: 1rem;
  color: #666;
  font-style: italic;
}

.discount-badge {
  display: inline-block;
  background: linear-gradient(45deg, #28a745, #20c997);
  color: white;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 10px;
  box-shadow: 0 2px 8px rgba(40, 167, 69, 0.3);
}

/* Button styling */
.register-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(45deg, #dc143c, #ff1744);
  color: white;
  padding: 15px 30px;

  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(220, 20, 60, 0.3);

  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: auto;
}

.register-btn:hover {
  background: linear-gradient(45deg, #ff1744, #dc143c);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(220, 20, 60, 0.4);
  color: white;
  text-decoration: none;
}

.btn-icon {
  font-size: 1.2rem;
}

/* Slider customization */
.slick-slide {
  height: auto;
  padding: 0 10px;
}

.slick-slide > div {
  height: 100%;
}

.slick-dots {
  bottom: -60px;
}

.slick-dots li button:before {
  color: #dc143c;
  font-size: 12px;
}

.slick-dots li.slick-active button:before {
  color: #dc143c;
  opacity: 1;
}

/* Responsive design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .plan-title {
    font-size: 1.5rem;
  }

  .price-amount {
    font-size: 2rem;
  }

  .register-btn {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 2rem;
  }

  .membership-box {
    margin: 0 10px;
  }

  .popular-badge {
    right: 10px;
    padding: 6px 15px;
    font-size: 0.7rem;
  }
}
</style>
