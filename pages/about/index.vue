<template>
  <div>
    <HomeHeroSlider />

    <section class="mission-section padding-large">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="mission-image-container">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.WoDvIpBwsR11Ghk8MEgcOwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Câu chuyện AlphaGym"
                class="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
          <div class="col-lg-6 ps-lg-5">
            <div class="section-header">
              <h2 class="section-title">Sứ Mệnh Của Chúng Tôi</h2>
            </div>
            <p>
              Tại AlphaGym, chúng tôi tin rằng thể chất và tinh thần là hai mặt
              của một đồng xu. Sứ mệnh của chúng tôi không chỉ dừng lại ở việc
              cung cấp những thiết bị hiện đại nhất hay các bài tập hiệu quả, mà
              là xây dựng một cộng đồng nơi mỗi cá nhân được truyền cảm hứng để
              bứt phá giới hạn, tìm thấy phiên bản mạnh mẽ nhất của chính mình.
            </p>
            <p>
              Chúng tôi cam kết tạo ra một môi trường luyện tập an toàn, thân
              thiện và đầy năng lượng, nơi mỗi hội viên, dù ở bất kỳ cấp độ nào,
              cũng cảm thấy được chào đón và hỗ trợ trên hành trình chinh phục
              mục tiêu sức khỏe.
            </p>
            <NuxtLink to="/goi-tap" class="btn btn-dark mt-3"
              >Khám Phá Gói Tập</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>

    <section class="about-us padding-medium bg-sand">
      <div class="container">
        <div class="row">
          <div class="section-header text-center">
            <h2 class="section-title pb-4">Những Gì Chúng Tôi Mang Lại</h2>
          </div>

          <div
            class="iconbox-wrapper d-flex flex-wrap justify-content-center pt-4"
          >
            <div class="iconbox col-md-4 text-center bg-white p-40 mb-4 mx-2">
              <div class="iconbox-icon mb-3">
                <i class="icon icon-group"></i>
              </div>
              <div class="iconbox-content">
                <h3 class="colored">Huấn Luyện Viên Đẳng Cấp</h3>
                <p>
                  Đội ngũ HLV được chứng nhận, giàu kinh nghiệm và luôn tận tâm
                  với sự tiến bộ của bạn.
                </p>
              </div>
            </div>
            <div class="iconbox col-md-4 text-center bg-white p-40 mb-4 mx-2">
              <div class="iconbox-icon mb-3">
                <i class="icon icon-price-tags"></i>
              </div>
              <div class="iconbox-content">
                <h3 class="colored">Chi Phí Minh Bạch</h3>
                <p>
                  Cung cấp các gói tập linh hoạt, phù hợp với mọi nhu cầu và
                  ngân sách, không có chi phí ẩn.
                </p>
              </div>
            </div>
            <div class="iconbox col-md-4 text-center bg-white p-40 mb-4 mx-2">
              <div class="iconbox-icon mb-3">
                <i class="icon icon-dumble"></i>
              </div>
              <div class="iconbox-content">
                <h3 class="colored">Thiết Bị Hiện Đại</h3>
                <p>
                  Hệ thống máy móc được nhập khẩu từ các thương hiệu hàng đầu
                  thế giới, bảo trì định kỳ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomeOurTrainers :trainers="trainers" />
  </div>
</template>

<script setup>
const [trainersResponse] = await Promise.all([useApiFetch("/trainers")]);
const trainers = ref(trainersResponse.data.value?.data || []);
</script>

<style scoped>
.mission-section {
  background-color: #ffffff;
}
.mission-image-container img {
  object-fit: cover;
  height: 100%;
}
.padding-large {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.teamImg {
  width: 100%;
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
.iconbox {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
}
</style>
