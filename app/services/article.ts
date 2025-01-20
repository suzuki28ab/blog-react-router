import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

export type Article = {
  slug: string;
  title: string;
  category: { label: string; value: string };
  tags?: string[];
  createdAt: string;
};

const articlesDirectory = path.join(process.cwd(), "app/routes/articles");

export function getAllArticles(): Article[] {
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fullPath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      createdAt: new Date(data.createdAt).toLocaleDateString("ja-JP"),
    } as Article;
  });

  return articles.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (article) => article.category.value === category
  );
}

export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter((article) => article.tags?.includes(tag));
}

export function getAllCategories(): { label: string; value: string }[] {
  const articles = getAllArticles();
  // categoryが{ label: string; value: string }型なら、以下のようにvalueを取り出す
  const categories = [
    ...new Set(articles.map((article) => article.category.value)),
  ];

  const otherIndex = categories.indexOf("other");
  if (otherIndex !== -1) {
    categories.splice(otherIndex, 1);
    categories.push("other");
  }

  // { label, value }型に変換して返却
  return categories.map((cat) => ({
    label: cat,
    value: cat,
  }));
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tags = articles.flatMap((article) => article.tags || []);
  const uniqueTags = [...new Set(tags)];
  // アルファベット順にソート
  return uniqueTags.sort((a, b) => a.localeCompare(b));
}
