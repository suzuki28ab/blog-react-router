import type { Config } from "@react-router/dev/config";
import {
  getAllArticles,
  getAllCategories,
  getAllTags,
  getArticlesByCategory,
  getArticlesByTag,
} from "./app/services/article";

const ITEMS_PER_PAGE = 10; // 1ページあたりの記事数

export default {
  async prerender({ getStaticPaths }) {
    const paths = [];

    // ホームページ
    paths.push("/");

    // 記事詳細ページ
    const articles = getAllArticles();
    articles.forEach((article) => {
      paths.push(`/articles/${article.slug}`);
    });

    // カテゴリーページ
    const categories = getAllCategories();
    categories.forEach((category) => {
      const categoryArticles = getArticlesByCategory(category.value);
      const totalPages = Math.ceil(categoryArticles.length / ITEMS_PER_PAGE);

      // 1ページ目から最後のページまでのパスを生成
      for (let page = 1; page <= totalPages; page++) {
        paths.push(`/category/${category.value}/${page}`);
      }
    });

    // タグページ
    const tags = getAllTags();
    tags.forEach((tag) => {
      const tagArticles = getArticlesByTag(tag);
      const totalPages = Math.ceil(tagArticles.length / ITEMS_PER_PAGE);

      // 1ページ目から最後のページまでのパスを生成
      for (let page = 1; page <= totalPages; page++) {
        paths.push(`/tag/${tag}/${page}`);
      }
    });

    return paths;
  },
  ssr: true,
} satisfies Config;
