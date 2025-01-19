import { MenuIcon } from "@yamada-ui/lucide";
import { Box, Flex, Heading, IconButton, Image } from "@yamada-ui/react";
import { useState } from "react";
import { Link } from "react-router";
import SideBar from "./SideBar";

export const Header = ({
  categories,
  tags,
}: {
  categories: string[];
  tags: string[];
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Box
        as="header"
        bg="brand.300"
        py={{ base: 4, md: 6 }}
        pr={{ base: "15%", md: "0" }}
        boxShadow="sm"
        position="fixed"
        width="100%"
        top={0}
        zIndex={10}
      >
        <Flex
          align="center"
          justify={{ base: "center", md: "space-around" }}
          maxW="1200px"
          mx="auto"
        >
          <Link to={"/"}>
            <Heading cursor="pointer" display="flex" alignItems="center">
              <Image
                src="/zukan.svg"
                alt="logo"
                width={{ base: "360px", md: "320px" }}
              />
            </Heading>
          </Link>

          <IconButton
            aria-label="Toggle sidebar"
            icon={<MenuIcon />}
            variant="ghost"
            display={{ base: "none", md: "flex" }}
            onClick={() => setToggle(!toggle)}
          />
        </Flex>
      </Box>
      <SideBar
        toggle={toggle}
        onClose={() => setToggle(false)}
        categories={categories}
        tags={tags}
      />
    </>
  );
};
