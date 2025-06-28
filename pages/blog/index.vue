<template>
  <body class="overflow-x">
    <div id="body-wrapper">
      <header id="header" class="bg-black">
        <div class="container">
          <div class="row">
            <nav class="navbar navbar-expand-lg col-md-12 padding-small">
              <div class="nav-brand">
                <a href="index.html"><img src="images/logo.png" /></a>
              </div>
              <button
                class="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#slide-navbar-collapse"
                aria-controls="slide-navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"
                  ><i class="icon icon-navicon"></i
                ></span>
              </button>
              <div
                class="navbar-collapse collapse text-hover"
                id="slide-navbar-collapse"
              >
                <ul class="navbar-nav list-inline light text-uppercase">
                  <li class="nav-item">
                    <a href="index.html" class="navlink">Trang chủ</a>
                  </li>
                  <li class="nav-item">
                    <a href="gioithieu.html">Giới thiệu</a>
                  </li>
                  <li class="nav-item">
                    <a href="hlv.html">Huấn luyện viên</a>
                  </li>
                  <li class="nav-item"><a href="goitap.html">Gói Tập</a></li>

                  <li class="nav-item">
                    <a href="contact.html">contact us</a>
                  </li>

                  <li class="nav-item">
                    <a href="dangki.html" style="color: #d4000d">
                      Đăng kí tập thử</a
                    >
                  </li>
                </ul>
              </div>
              <!--navbar-collapse-->
              <div class="action-menu">
                <div class="searchbar">
                  <a
                    href="#"
                    class="search-button search-toggle"
                    data-selector=".navbar"
                  >
                    <i class="icon icon-search"></i>
                  </a>
                  <form role="search" method="get" class="search-box" action="">
                    <input
                      class="search-field text search-input"
                      placeholder="Search"
                      type="search"
                    />
                  </form>
                </div>
                <div class="shopping-cart">
                  <a href="#">
                    <i class="icon icon-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <!--action-menu-->
            </nav>
          </div>
        </div>
      </header>
      <section id="billboard">
        <div class="button-container">
          <button class="prev slick-arrow">
            <i class="icon mb-2 mr-1 icon-angle-left"></i>
          </button>
          <button class="next slick-arrow">
            <i class="icon mb-2 mr-1 icon-angle-right"></i>
          </button>
        </div>
        <div class="slider">
          <div class="slider-item">
            <div class="container">
              <div class="row">
                <div class="text-content light offset-md-5">
                  <h2>
                    <strong class="colored">Hard Work</strong> is for Every
                    Success
                  </h2>
                  <p>
                    <em
                      >Start by taking inspirations, continue it to give
                      inspirations</em
                    >
                  </p>

                  <div class="pix_btn">
                    <a href="#" class="hvr-shutter-in-horizontal mt-3"
                      >BẮT ĐẦU</a
                    >
                  </div>
                </div>
                <!--text-content-->
              </div>
            </div>
          </div>
          <!--slider-item-->

          <div class="slider-item">
            <div class="container">
              <div class="row">
                <div class="text-content light offset-md-5">
                  <h2>
                    <strong class="colored">Hard Work</strong> is for Every
                    Success
                  </h2>
                  <p>
                    <em
                      >Start by taking inspirations, continue it to give
                      inspirations</em
                    >
                  </p>

                  <div class="pix_btn">
                    <a href="#" class="hvr-shutter-in-horizontal mt-3"
                      >Get Started</a
                    >
                  </div>
                </div>
                <!--text-content-->
              </div>
            </div>
          </div>
          <!--slider-item-->

          <div class="slider-item">
            <div class="container">
              <div class="row">
                <div class="text-content light offset-md-5">
                  <h2>
                    <strong class="colored">Hard Work</strong> is for Every
                    Success
                  </h2>
                  <p>
                    <em
                      >Start by taking inspirations, continue it to give
                      inspirations</em
                    >
                  </p>

                  <div class="pix_btn">
                    <a href="#" class="hvr-shutter-in-horizontal mt-3"
                      >Get Started</a
                    >
                  </div>
                </div>
                <!--text-content-->
              </div>
            </div>
          </div>
          <!--slider-item-->
        </div>
      </section>
      <!----#billboard----->

      <section class="about-us padding-medium bg-sand">
        <div class="container">
          <div class="row">
            <div class="section-header text-center">
              <h2 class="section-title pb-4">Giới thiệu</h2>
              <p>
                "Nơi bạn rèn luyện không chỉ thể lực – mà còn bản lĩnh!" "Chúng
                tôi không chỉ xây dựng cơ bắp, mà còn xây dựng ý chí."
              </p>
            </div>
            <div class="iconbox-wrapper d-flex pt-4 p-sm-3">
              <div class="iconbox col-md-4 text-center bg-white p-40 mb-3">
                <div class="iconbox-icon mb-3">
                  <i class="icon icon-group"></i>
                </div>
                <div class="iconbox-content">
                  <h3 class="colored">Huấn luyện viên chiến thắng</h3>
                  <p>
                    Chúng tôi sở hữu đội ngũ huấn luyện viên chuyên nghiệp, từng
                    đạt nhiều thành tích nổi bật – luôn đồng hành cùng bạn trên
                    hành trình chinh phục thể hình lý tưởng.
                  </p>
                </div>
              </div>
              <!--iconbox-->

              <div
                class="iconbox col-md-4 text-center bg-white p-40 mrl-3 mb-3"
              >
                <div class="iconbox-icon mb-3">
                  <i class="icon icon-price-tags"></i>
                </div>
                <div class="iconbox-content">
                  <h3 class="colored">Giá cả hợp lý</h3>
                  <p>
                    Mức giá phù hợp cho mọi đối tượng, với nhiều gói tập linh
                    hoạt – cam kết mang lại giá trị xứng đáng với số tiền bạn bỏ
                    ra.
                  </p>
                </div>
              </div>
              <!--iconbox-->

              <div class="iconbox col-md-4 text-center bg-white p-40 mb-3">
                <div class="iconbox-icon mb-3">
                  <i class="icon icon-dumble"></i>
                </div>
                <div class="iconbox-content">
                  <h3 class="colored">Thiết bị hiện đại</h3>
                  <p>
                    Trang thiết bị tập luyện tiên tiến, không ngừng nâng cấp –
                    giúp bạn luyện tập hiệu quả, an toàn và đầy hứng khởi mỗi
                    ngày.
                  </p>
                </div>
              </div>
              <!--iconbox-->
            </div>
            <!--iconbox-wrapper-->
          </div>
        </div>
      </section>

      <section class="services">
        <div class="workout-box front-dark col-md-6 p-0">
          <img
            src="images/bodybuilding.jpg"
            alt="bodybuilding"
            class="fitnessImg"
          />
          <div class="text-content light">
            <h3 class="colored">Thể hình</h3>
            <p>
              Chương trình luyện tập chuyên sâu giúp bạn phát triển cơ bắp, cải
              thiện thể hình và nâng cao sức mạnh vượt trội.
            </p>
            <div class="pix_btn">
              <a
                href="#"
                class="btn btn-effects"
                data-toggle="modal"
                data-target="#modalTheHinh"
              >
                <svg>
                  <rect
                    x="0"
                    y="0"
                    fill="none"
                    width="100%"
                    height="100%"
                  ></rect>
                </svg>
                Xem thêm
                <i class="icon icon-arrow-thin-right hvr-icon"></i>
              </a>
            </div>
          </div>
          <!--text-content-->
        </div>
        <!--workout-box-->
        <div class="workout-box front-dark col-md-6 p-0">
          <img src="images/cardio.jpg" alt="cardio" class="fitnessImg" />
          <div class="text-content light">
            <h3 class="colored">Tim mạch</h3>
            <p>
              Các bài tập linh hoạt phù hợp cho nữ giới, tập trung vào eo, mông,
              đùi và vóc dáng săn chắc.
            </p>
            <div class="pix_btn">
              <a
                href="#"
                class="btn btn-effects"
                data-toggle="modal"
                data-target="#modalTimMach"
              >
                <svg>
                  <rect
                    x="0"
                    y="0"
                    fill="none"
                    width="100%"
                    height="100%"
                  ></rect>
                </svg>
                Xem thêm
                <i class="icon icon-arrow-thin-right hvr-icon"></i>
              </a>
            </div>
          </div>
          <!--text-content-->
        </div>
        <!--workout-box-->
        <div class="workout-box front-dark col-md-6 p-0">
          <img src="images/fitness.jpg" alt="fitness" class="fitnessImg" />
          <div class="text-content light">
            <h3 class="colored">Sự thích hợp</h3>
            <p>
              Lộ trình tập luyện được cá nhân hóa, phù hợp với mọi cấp độ – từ
              người mới đến vận động viên chuyên nghiệp.
            </p>
            <div class="pix_btn">
              <a
                href="#"
                class="btn btn-effects"
                data-toggle="modal"
                data-target="#modalPhuHop"
              >
                <svg>
                  <rect
                    x="0"
                    y="0"
                    fill="none"
                    width="100%"
                    height="100%"
                  ></rect>
                </svg>
                Xem thêm
                <i class="icon icon-arrow-thin-right hvr-icon"></i>
              </a>
            </div>
          </div>
          <!--text-content-->
        </div>
        <!--workout-box-->
        <div class="workout-box front-dark col-md-6 p-0">
          <img src="images/crossfit.jpg" alt="crossfit" class="fitnessImg" />
          <div class="text-content light">
            <h3 class="colored">Tập thể dục chéo</h3>
            <p>
              Phương pháp luyện tập kết hợp nhiều kỹ thuật giúp đốt mỡ, tăng sức
              bền, cải thiện thể lực toàn diện.
            </p>
            <div class="pix_btn">
              <a
                href="#"
                class="btn btn-effects"
                data-toggle="modal"
                data-target="#modalCrossfit"
              >
                <svg>
                  <rect
                    x="0"
                    y="0"
                    fill="none"
                    width="100%"
                    height="100%"
                  ></rect>
                </svg>
                Xem thêm
                <i class="icon icon-arrow-thin-right hvr-icon"></i>
              </a>
            </div>
          </div>
          <!--text-content-->
        </div>
        <!--workout-box-->
      </section>

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

      <section class="our-trainers pb-60">
        <h2 class="section-title text-center mb-4">HUẤN LUYỆN VIÊN</h2>
        <div class="container">
          <div class="row">
            <div class="col-md-3 text-center">
              <figure>
                <a href="#"
                  ><img src="images/david.jpg" alt="post" class="teamImg"
                /></a>
              </figure>
              <div class="text-content text-center mt-3 mb-3 mb-3">
                <h4><a href="#">David Williams</a></h4>
                <span class="designation colored-grey">Body Builder Coach</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="dark social-links">
                  <ul class="list-unstyled d-flex">
                    <li class="mr-3">
                      <a href="#"><i class="icon icon-facebook m-1"></i></a>
                    </li>
                    <li class="mr-3">
                      <a href="#"><i class="icon icon-twitter m-1"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon icon-youtube m-1"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--text-content-->
            </div>
            <!--col-md-3-->
            <div class="col-md-3 text-center">
              <figure>
                <a href="#"
                  ><img src="images/rosy.jpg" alt="post" class="teamImg"
                /></a>
              </figure>
              <div class="text-content text-center mt-3 mb-3">
                <h4><a href="#">Rosy Rivera</a></h4>
                <span class="designation colored-grey">Body Builder Coach</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="dark social-links">
                  <ul class="list-unstyled d-flex">
                    <li class="mr-3">
                      <a href="#"><i class="icon icon-facebook m-1"></i></a>
                    </li>
                    <li class="mr-3">
                      <a href="#"><i class="icon icon-twitter m-1"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon icon-youtube m-1"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--text-content-->
            </div>
            <!--col-md-3-->
            <div class="col-md-3 text-center">
              <figure>
                <a href="#"
                  ><img src="images/matt.jpg" alt="post" class="teamImg"
                /></a>
              </figure>
              <div class="text-content text-center mt-3 mb-3">
                <h4><a href="#">Matt Stonie</a></h4>
                <span class="designation colored-grey">Body Builder Coach</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="dark social-links">
                  <ul class="list-unstyled d-flex">
                    <li class="mr-3">
                      <a href="#"><i class="icon icon-facebook m-1"></i></a>
                    </li>
                    <li class="mr-3">
                      <a href="#"><i class="icon icon-twitter m-1"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon icon-youtube m-1"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--text-content-->
            </div>
            <!--col-md-3-->
            <div class="col-md-3 text-center">
              <figure>
                <a href="#"
                  ><img src="images/sofia.jpg" alt="post" class="teamImg"
                /></a>
              </figure>
              <div class="text-content text-center mt-3 mb-3">
                <h4><a href="#">Sofia Lauren</a></h4>
                <span class="designation colored-grey">Body Builder Coach</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div class="dark social-links">
                  <ul class="list-unstyled d-flex">
                    <li class="mr-3">
                      <a href="#"><i class="icon icon-facebook m-1"></i></a>
                    </li>
                    <li class="mr-3">
                      <a href="#"><i class="icon icon-twitter m-1"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icon icon-youtube m-1"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--text-content-->
            </div>
            <!--col-md-3-->
          </div>

          <div class="pix_btn light text-center mt-3">
            <a href="hlv.html" class="hvr-shutter-in-horizontal mt-3"
              >Xem tất cả</a
            >
          </div>
        </div>
      </section>

      <section class="membership padding-medium light front-dark">
        <div class="membership-wrapper padding-medium">
          <h2 class="section-title text-center mb-4">GÓI TẬP</h2>
          <div class="container">
            <div class="row">
              <div class="flex-container">
                <div class="membership-box mb-3">
                  <div class="heading-box">
                    <h3>Cơ Bản</h3>
                  </div>
                  <div class="text-content">
                    <div class="inclusion">
                      <ul class="list-unstyled colored-alto">
                        <li>
                          <i class="icon icon-check"></i>Thành viên cơ bản
                        </li>
                        <li>
                          <i class="icon icon-check"></i>Sử dụng thiết bị cơ bản
                        </li>
                        <li>
                          <i class="icon icon-close"></i>Không có kế hoạch dinh
                          dưỡng
                        </li>
                        <li>
                          <i class="icon icon-check"></i>Lời khuyên sức khỏe cơ
                          bản
                        </li>
                        <li>
                          <i class="icon icon-close"></i>Chỉ Thứ 2 - Thứ 6
                        </li>
                        <li>
                          <i class="icon icon-check"></i>Không có PT riêng
                        </li>
                        <li>
                          <i class="icon icon-close"></i>Không có tiện ích thêm
                        </li>
                      </ul>
                    </div>
                    <!--inclusion-->
                    <div class="meta-price">
                      <p><sup>$</sup><strong>25</strong><em>/tháng</em></p>
                    </div>
                    <div class="pix_btn">
                      <a
                        href="goitap.html"
                        class="hvr-shutter-in-horizontal mt-3"
                        >Đăng kí ngay</a
                      >
                    </div>
                  </div>
                  <!--text-content-->
                </div>
                <!--membership-box-->

                <div class="membership-box mb-3">
                  <div class="heading-box">
                    <h3>Tiêu Chuẩn</h3>
                  </div>
                  <div class="text-content">
                    <div class="inclusion">
                      <ul class="list-unstyled colored-alto">
                        <li>
                          <i class="icon icon-check"></i>Thành viên đầy đủ
                        </li>
                        <li>
                          <i class="icon icon-check"></i>Sử dụng tất cả thiết bị
                        </li>
                        <li>
                          <i class="icon icon-check"></i>Kế hoạch dinh dưỡng cơ
                          bản
                        </li>
                        <li>
                          <i class="icon icon-check"></i>Lời khuyên sức khỏe &
                          thể hình
                        </li>
                        <li><i class="icon icon-check"></i>Tập 7 ngày/tuần</li>
                        <li><i class="icon icon-check"></i>Truy cập đầy đủ</li>
                        <li>
                          <i class="icon icon-check"></i>Không có tiện ích cao
                          cấp
                        </li>
                      </ul>
                    </div>
                    <!--inclusion-->
                    <div class="meta-price">
                      <p><sup>$</sup><strong>40</strong><em>/tháng</em></p>
                    </div>
                    <div class="pix_btn">
                      <a
                        href="goitap.html"
                        class="hvr-shutter-in-horizontal mt-3"
                        >Đăng kí ngay</a
                      >
                    </div>
                  </div>
                  <!--text-content-->
                </div>
                <!--membership-box-->

                <div class="membership-box mb-3">
                  <div class="heading-box">
                    <h3>Cao Cấp</h3>
                  </div>
                  <div class="text-content">
                    <div class="inclusion">
                      <ul class="list-unstyled colored-alto">
                        <li><i class="icon icon-check"></i>Thành viên VIP</li>
                        <li>
                          <i class="icon icon-check"></i>Sử dụng tất cả thiết bị
                        </li>
                        <li>
                          <i class="icon icon-check"></i>Kế hoạch dinh dưỡng chi
                          tiết
                        </li>
                        <li>
                          <i class="icon icon-check"></i>Lời khuyên từ chuyên
                          gia
                        </li>
                        <li><i class="icon icon-check"></i>Tập 24/7</li>
                        <li>
                          <i class="icon icon-check"></i>Truy cập đầy đủ + Spa
                        </li>
                        <li>
                          <i class="icon icon-check"></i>PT riêng 2 buổi/tháng
                        </li>
                      </ul>
                    </div>
                    <!--inclusion-->
                    <div class="meta-price">
                      <p><sup>$</sup><strong>60</strong><em>/month</em></p>
                    </div>
                    <div class="pix_btn">
                      <a
                        href="goitap.html"
                        class="hvr-shutter-in-horizontal mt-3"
                        >Đăng kí ngay</a
                      >
                    </div>
                  </div>
                  <!--text-content-->
                </div>
                <!--membership-box-->
              </div>
              <!--col-md-12-->
            </div>
          </div>
        </div>
        <!--membership-wrapper-->
      </section>

      <section class="testimonials-wrap mt-3 mb-5">
        <div class="section-header text-center p-30">
          <h2 class="section-title pb-4">Our Testimonials</h2>
        </div>
        <div class="container">
          <div class="row">
            <div class="testimonial-slider d-flex mb-6">
              <div class="col-md-4 testimonials-inner text-center">
                <figure>
                  <img
                    src="images/lucy.jpg"
                    alt="lucy"
                    class="authorImg img-circle"
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="testimonial-author">
                  <span class="name colored">Lucy Antony</span>
                </div>
              </div>

              <div class="col-md-4 testimonials-inner text-center">
                <figure>
                  <img
                    src="images/michael.jpg"
                    alt="Michael"
                    class="authorImg img-circle"
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="testimonial-author">
                  <span class="name colored">Michael Smith</span>
                </div>
              </div>

              <div class="col-md-4 testimonials-inner text-center">
                <figure>
                  <img
                    src="images/maria.jpg"
                    alt="Maria"
                    class="authorImg img-circle"
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="testimonial-author">
                  <span class="name colored">Maria Garcia</span>
                </div>
              </div>

              <div class="col-md-4 testimonials-inner text-center">
                <figure>
                  <img
                    src="images/lucy.jpg"
                    alt="Lucy"
                    class="authorImg img-circle"
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="testimonial-author">
                  <span class="name colored">Jennie Rose</span>
                </div>
              </div>

              <div class="col-md-4 testimonials-inner text-center">
                <figure>
                  <img
                    src="images/lucy.jpg"
                    alt="Lucy"
                    class="authorImg img-circle"
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="testimonial-author">
                  <span class="name colored">Jennie Rose</span>
                </div>
              </div>
            </div>
            <!--testimonial-slider-->
          </div>
        </div>
      </section>

      <section class="latest-blogs bg-black padding-medium light">
        <h2 class="section-title text-center mb-5">Blogs</h2>
        <div class="container">
          <div class="row">
            <div class="post-slider d-flex">
              <div class="col-md-3 post-item">
                <figure>
                  <img src="images/postitem1.jpg" alt="food3" class="blogImg" />
                </figure>
                <div class="post-content pt-4">
                  <span class="meta-date">March 10,2020</span>
                  <h3 class="post-title">
                    <a href="single-blog.html"
                      >Maintain a Perfect Structure After Workout</a
                    >
                  </h3>
                </div>
              </div>
              <!--post-item-->
              <div class="col-md-3 post-item">
                <figure>
                  <img src="images/postitem2.jpg" alt="food3" class="blogImg" />
                </figure>
                <div class="post-content pt-4">
                  <span class="meta-date">March 10,2020</span>
                  <h3 class="post-title">
                    <a href="single-blog.html"
                      >Maintain a Perfect Structure After Workout</a
                    >
                  </h3>
                </div>
              </div>
              <!--post-item-->
              <div class="col-md-3 post-item">
                <figure>
                  <img src="images/postitem3.jpg" alt="food3" class="blogImg" />
                </figure>
                <div class="post-content pt-4">
                  <span class="meta-date">March 10,2020</span>
                  <h3 class="post-title">
                    <a href="single-blog.html"
                      >Maintain a Perfect Structure After Workout</a
                    >
                  </h3>
                </div>
              </div>
              <!--post-item-->
              <div class="col-md-3 post-item">
                <figure>
                  <img src="images/postitem4.jpg" alt="food3" class="blogImg" />
                </figure>
                <div class="post-content pt-4">
                  <span class="meta-date">March 10,2020</span>
                  <h3 class="post-title">
                    <a href="single-blog.html"
                      >Maintain a Perfect Structure After Workout</a
                    >
                  </h3>
                </div>
              </div>
              <!--post-item-->
              <div class="col-md-3 post-item">
                <figure>
                  <img src="images/postitem1.jpg" alt="food3" class="blogImg" />
                </figure>
                <div class="post-content pt-4">
                  <span class="meta-date">March 10,2020</span>
                  <h3 class="post-title">
                    <a href="single-blog.html"
                      >Maintain a Perfect Structure After Workout</a
                    >
                  </h3>
                </div>
              </div>
              <!--post-item-->
            </div>
            <!--post-slider-->
          </div>
          <div class="pix_btn light text-center mt-3">
            <a href="#" class="hvr-shutter-in-horizontal mt-3">View All</a>
          </div>
        </div>
      </section>

      <section class="association-with padding-medium bg-sand">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul
                class="d-flex list-unstyled justify-content-between flex-wrap"
              >
                <li>
                  <a href="#"><img src="images/icon.png" class="brandImg" /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="images/icon1.png" class="brandImg"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="images/icon2.png" class="brandImg"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="images/icon3.png" class="brandImg"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img src="images/icon4.png" class="brandImg"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" class="bg-black">
        <div class="container">
          <div class="row">
            <div class="wrap flex-container">
              <div class="col-md-3 light mb-5">
                <div class="row">
                  <img src="images/logo.png" class="mb-3" />
                  <p>
                    Fitphysical Pvt Ltd is for build and fitness body sed do
                    eiusmod,adipisicing elit
                  </p>
                  <div class="address">
                    <ul class="list-unstyled">
                      <li>
                        <i class="icon icon-map-marker colored"></i>Lincoln Park
                        Chicago, Illinois
                      </li>
                      <li>
                        <i class="icon icon-phone colored"></i>(510) 710-3464
                        (510) 640-6326
                      </li>
                      <li>
                        <i class="icon icon-envelope colored"></i>
                        <div class="mail-address">
                          <a href="#" class="pr-10"
                            >hello@templatesjungle.com</a
                          >
                          <a href="#">info@templatesjungle.com</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 recent-post mb-5">
                <h4 class="widget-title mb-3">recent blog posts</h4>
                <div class="widget-content">
                  <ul class="light">
                    <li class="border-bottom pb-10 mb-3">
                      <h5>
                        <a href="">How to Be Motivated For All Exercise</a>
                      </h5>
                      <span class="meta-date">September 21,2020</span>
                    </li>
                    <li class="border-bottom pb-10 mb-3">
                      <h5>
                        <a href="">How to Be Motivated For All Exercise</a>
                      </h5>
                      <span class="meta-date">September 21,2020</span>
                    </li>
                    <li>
                      <h5>
                        <a href="">How to Be Motivated For All Exercise</a>
                      </h5>
                      <span class="meta-date">September 21,2020</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 widget-gallery mb-5">
                <div class="row">
                  <h4 class="widget-title mb-3">gallery</h4>
                  <div class="widget-content">
                    <ul class="d-flex d-flex-flow">
                      <li class="mb-2 mr-2">
                        <a href="#"
                          ><img
                            src="images/david.jpg"
                            alt="gym"
                            class="sgalleryImg"
                        /></a>
                      </li>
                      <li class="mb-2 mr-2">
                        <a href="#"
                          ><img
                            src="images/rosy.jpg"
                            alt="gym"
                            class="sgalleryImg"
                        /></a>
                      </li>
                      <li class="mb-2">
                        <a href="#"
                          ><img
                            src="images/sofia.jpg"
                            alt="gym"
                            class="sgalleryImg"
                        /></a>
                      </li>
                      <li class="mb-2 mr-2">
                        <a href="#"
                          ><img
                            src="images/matt.jpg"
                            alt="gym"
                            class="sgalleryImg"
                        /></a>
                      </li>
                      <li class="mb-2 mr-2">
                        <a href="#"
                          ><img
                            src="images/postitem2.jpg"
                            alt="gym"
                            class="sgalleryImg"
                        /></a>
                      </li>
                      <li class="mb-2">
                        <a href="#"
                          ><img
                            src="images/postitem3.jpg"
                            alt="gym"
                            class="sgalleryImg"
                        /></a>
                      </li>
                      <li class="mb-2 mr-2">
                        <a href="#"
                          ><img
                            src="images/postitem4.jpg"
                            alt="gym"
                            class="sgalleryImg"
                        /></a>
                      </li>
                      <li class="mb-2 mr-2">
                        <a href="#"
                          ><img
                            src="images/postitem1.jpg"
                            alt="gym"
                            class="sgalleryImg"
                        /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 widget-newsletter">
                <div class="row">
                  <h4 class="widget-title">Newsletter</h4>
                  <div class="widget-content light">
                    <p>
                      By subscribing us you will get discount offers and our
                      tips for your fitness for good results.
                    </p>
                    <div
                      class="newsletter-button d-flex align-items-center light"
                    >
                      <input
                        type="text"
                        name="Subscribe"
                        placeholder="Your Email Address"
                      />
                      <button class="hvr-shutter-in-horizontal m-0">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="footer-bottom bg-black padding-small">
        <div class="container">
          <div class="row">
            <div class="wrap flex-container">
              <div class="copyright">
                <p class="mb-0">
                  © Copyright 2022 FitPhysique. Free Template by
                  <a href="https://templatesjungle.com" target="_blank"
                    >TemplatesJungle</a
                  >.
                </p>
              </div>
              <div class="social-links mt-3">
                <ul class="list-unstyled d-flex">
                  <li class="mr-3">
                    <a href="#"><i class="icon icon-facebook m-1"></i></a>
                  </li>
                  <li class="mr-3">
                    <a href="#"><i class="icon icon-twitter m-1"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icon icon-youtube m-1"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--body-wrapper-->

    <!-- Modal cho từng phần workout -->
    <div id="modalTheHinh" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-0">
            <h5 class="modal-title">TĂNG CƠ VÀ SỨC MẠNH</h5>
            <button type="button" class="close text-white" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Chương trình thể hình tại FitPhysique tập trung vào việc xây dựng
              cơ bắp toàn diện, kỹ thuật nâng tạ an toàn, và hướng dẫn dinh
              dưỡng phù hợp giúp bạn đạt hiệu quả tối đa trong quá trình tập
              luyện.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="modalTimMach" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-0">
            <h5 class="modal-title">BÀI TẬP TIM MẠCH</h5>
            <button type="button" class="close text-white" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Tập cardio cải thiện sức bền tim mạch, đốt cháy calo nhanh chóng
              và giúp vóc dáng cân đối. Lớp học phù hợp cho mọi đối tượng với
              huấn luyện viên chuyên nghiệp hướng dẫn tận tình.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="modalPhuHop" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-0">
            <h5 class="modal-title">SỰ THÍCH HỢP</h5>
            <button type="button" class="close text-white" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Mỗi học viên tại FitPhysique đều được xây dựng một lộ trình cá
              nhân hoá, từ cấp độ cơ bản đến nâng cao, đảm bảo phù hợp với mục
              tiêu và thể trạng riêng của bạn.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="modalCrossfit" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-0">
            <h5 class="modal-title">TẬP THỂ DỤC CHÉO (CROSSFIT)</h5>
            <button type="button" class="close text-white" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              CrossFit là phương pháp luyện tập toàn diện với các bài tập phối
              hợp sức mạnh, độ bền và tính linh hoạt. Chương trình phù hợp cho
              người muốn chinh phục giới hạn thể lực cá nhân.
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";

// --- DỮ LIỆU GIẢ (MOCK DATA) ---
// Thay vì dùng useFetch, chúng ta tạo sẵn dữ liệu ở đây

const plans = ref([
  {
    plan_id: 1,
    plan_name: "Gói Tập 1 Tháng",
    duration_days: 30,
    price: 500000,
    description:
      "Trải nghiệm không giới hạn tất cả các khu vực tập luyện trong vòng một tháng.",
  },
  {
    plan_id: 2,
    plan_name: "Gói Tập 3 Tháng (Tiết kiệm)",
    duration_days: 90,
    price: 1400000,
    description:
      "Lựa chọn tiết kiệm cho những ai đã có mục tiêu rõ ràng và cam kết dài hạn.",
  },
  {
    plan_id: 3,
    plan_name: "Tập cùng Huấn Luyện Viên",
    duration_days: 30,
    price: 3000000,
    description:
      "Bao gồm 12 buổi tập 1-1 với HLV cá nhân để đạt được kết quả nhanh và an toàn nhất.",
  },
]);

const articles = ref([
  {
    article_id: 1,
    title: "5 Lợi ích không ngờ của việc tập Squat đúng cách",
    excerpt:
      "Squat không chỉ giúp bạn có một vòng ba săn chắc, nó còn là vua của các bài tập giúp tăng cường sức mạnh toàn thân và cải thiện hormone...",
    slug: "loi-ich-cua-squat",
    featured_image_url:
      "https://placehold.co/600x400/2d3748/ffffff?text=Fitness",
  },
  {
    article_id: 2,
    title: "Chế độ dinh dưỡng cho người mới bắt đầu tập gym",
    excerpt:
      "Tập luyện chỉ chiếm 30%, 70% còn lại đến từ dinh dưỡng. Hãy cùng tìm hiểu cách ăn uống khoa học để tối ưu hóa kết quả tập luyện của bạn.",
    slug: "dinh-duong-cho-nguoi-moi",
    featured_image_url:
      "https://placehold.co/600x400/2d3748/ffffff?text=Nutrition",
  },
  {
    article_id: 3,
    title: "Tại sao giấc ngủ lại quan trọng với người tập thể hình?",
    excerpt:
      "Cơ bắp không phát triển trong phòng tập, chúng phát triển khi bạn ngủ. Đừng bỏ qua yếu tố quan trọng nhất để phục hồi và tăng trưởng.",
    slug: "tam-quan-trong-cua-giac-ngu",
    featured_image_url: "https://placehold.co/600x400/2d3748/ffffff?text=Sleep",
  },
]);
</script>

<style scoped>
/* Bạn có thể thêm các style CSS riêng cho trang này ở đây nếu cần */
.bg-primary-500 {
  background-color: #3b82f6; /* Ví dụ màu xanh */
}
.text-primary-600 {
  color: #2563eb;
}
.hover\:bg-primary-600:hover {
  background-color: #2563eb;
}
.hover\:text-primary-800:hover {
  color: #1e40af;
}
</style>
