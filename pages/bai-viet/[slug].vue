<template>
  <div>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div v-if="pending" class="text-center py-5">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div v-else-if="error" class="alert alert-danger">
            Không thể tải được bài viết. Vui lòng thử lại.
          </div>

          <article v-else-if="article" class="blog-content">
            <div v-html="article.content"></div>
          </article>

          <div class="text-center mt-5">
            <NuxtLink to="/bai-viet" class="btn btn-outline-dark">
              <i class="icon icon-arrow-left me-2"></i> Quay lại danh sách Blogs
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useHead } from "#imports";

const route = useRoute();

const slug = route.params.slug;

const {
  data: response,
  pending,
  error,
} = await useApiFetch(`/articles/${slug}`);
const article = response.value?.data;

if (article) {
  useHead({
    title: `${article.title} - AlphaGym Blog`,
    meta: [{ name: "description", content: article.excerpt }],
  });
}

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
</script>

<style scoped>
.page-header-section {
  background-size: cover;
  background-position: center;
  padding: 8rem 0;
  color: white;
}
.page-title {
  font-family: "Oswald", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.page-subtitle {
  font-size: 1.1rem;
  color: #e5e7eb;
}

.blog-content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #333;
}

/* Style cho các thẻ được render từ v-html */
:deep(.blog-content h2) {
  font-family: "Oswald", sans-serif;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
:deep(.blog-content p) {
  margin-bottom: 1.25rem;
}
:deep(.blog-content img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}
</style>
