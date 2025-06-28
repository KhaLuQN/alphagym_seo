<template>
  <header id="header" class="bg-black">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-lg col-md-12 padding-small">
          <div class="nav-brand">
            <a href="index.html"><img src="/public/images/logo.png" /></a>
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
                <NuxtLink to="/">Trang chủ</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about">Giới thiệu</NuxtLink>
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
</template>
<script></script>
