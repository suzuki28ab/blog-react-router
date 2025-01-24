import { Box } from "@yamada-ui/react";
import { Outlet } from "react-router";
import { Header } from "~/components/layout/Header";
import { getAllCategories, getAllTags } from "~/services/article";
import type { Route } from "./+types/layout";

export function meta() {
  return [
    { title: "頭寒足熱2" },
    { description: "とあるプログラマーのブログ" },
  ];
}

export async function loader() {
  const categories = getAllCategories();
  const tags = getAllTags();
  return { categories, tags };
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  const { categories, tags } = loaderData;
  return (
    <Box>
      <Header categories={categories} tags={tags} />
      <Box
        as="main"
        pr={{ base: "15%", md: "0" }}
        bgColor="brand.50"
        minH="100vh"
        pt={{ base: "80px", md: "100px" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
