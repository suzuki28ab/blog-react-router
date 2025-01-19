import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

export type Article = {
  slug: string;
  title: string;
  category: string;
  tags?: string[];
};

const articlesDirectory = path.join(process.cwd(), "app/routes/articles");

export function getAllArticles(): Article[] {
  const filenames = fs.readdirSync(articlesDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fullPath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
    } as Article;
  });
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter((article) => article.tags?.includes(tag));
}

export function getAllCategories(): string[] {
  const articles = getAllArticles();
  return [...new Set(articles.map((article) => article.category))];
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tags = articles.flatMap((article) => article.tags || []);
  return [...new Set(tags)];
}
