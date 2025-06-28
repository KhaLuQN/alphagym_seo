import $ from "jquery";

import "slick-carousel/slick/slick.min.js";

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$ = window.jQuery = $;
  }
});
