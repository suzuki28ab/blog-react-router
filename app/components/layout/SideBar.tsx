import { XIcon } from "@yamada-ui/lucide";
import {
  Box,
  Flex,
  IconButton,
  List,
  ListItem,
  Tag,
  Text,
  Wrap,
  Link as YamadaLink,
} from "@yamada-ui/react";
import { Link } from "react-router";

type SideBarProps = {
  toggle: boolean;
  onClose: () => void;
  categories: string[];
  tags: string[];
};

const SideBar = ({ toggle, onClose, categories, tags }: SideBarProps) => {
  return (
    <Box
      as="nav"
      display={{ base: "block", md: toggle ? "block" : "none" }}
      position="fixed"
      top={0}
      right={0}
      h="100vh"
      zIndex={20}
      overflowY="auto"
      bg="brand.100"
      w={{ base: "15%", md: "60%" }}
    >
      <Flex justify="flex-end" p={2} display={{ base: "none", md: "flex" }}>
        <IconButton
          icon={<XIcon />}
          aria-label="Close sidebar"
          variant="ghost"
          onClick={onClose}
        />
      </Flex>

      <Text as="h3" color="gray.500" fontWeight="bold" p={4}>
        カテゴリー
      </Text>
      <List fontSize="sm">
        {categories.map((category) => (
          <ListItem key={category}>
            <YamadaLink
              display="block"
              pl={8}
              py={2}
              as={Link}
              to={`/category/${encodeURIComponent(category)}/1`}
            >
              {category}
            </YamadaLink>
          </ListItem>
        ))}
      </List>

      <Text as="h3" color="gray.500" fontWeight="bold" p={4}>
        タグ
      </Text>
      <Box px={4} pb={4}>
        <Wrap gap="md">
          {tags.map((tag) => (
            <Link key={tag} to={`/tag/${encodeURIComponent(tag)}/1`}>
              <Tag>{tag}</Tag>
            </Link>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};

export default SideBar;
