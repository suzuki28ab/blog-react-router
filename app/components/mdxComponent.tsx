import {
  Code,
  type CodeProps,
  Heading,
  type HeadingProps,
  Link,
  type LinkProps,
  List,
  ListItem,
  type ListItemProps,
  type ListProps,
  Text,
  type TextProps,
} from "@yamada-ui/react";
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  LiHTMLAttributes,
} from "react";
import type { JSX } from "react/jsx-runtime";

export const mdxComponents = {
  // # Example
  h1: (
    props: JSX.IntrinsicAttributes & { as?: "h1" | undefined } & HeadingProps &
      Omit<
        DetailedHTMLProps<
          HTMLAttributes<HTMLHeadingElement>,
          HTMLHeadingElement
        >,
        keyof HeadingProps
      >
  ) => <Heading as="h1" fontSize="3xl" mb={4} color="brand.300" {...props} />,
  h2: (
    props: JSX.IntrinsicAttributes & { as?: "h1" | undefined } & HeadingProps &
      Omit<
        DetailedHTMLProps<
          HTMLAttributes<HTMLHeadingElement>,
          HTMLHeadingElement
        >,
        keyof HeadingProps
      >
  ) => (
    <Heading
      as="h2"
      fontSize="2xl"
      mt={8}
      mb={4}
      color="brand.300"
      {...props}
    />
  ),
  p: (
    props: JSX.IntrinsicAttributes & { as?: "p" | undefined } & TextProps &
      Omit<
        DetailedHTMLProps<
          HTMLAttributes<HTMLParagraphElement>,
          HTMLParagraphElement
        >,
        keyof TextProps
      >
  ) => (
    <Text
      fontSize="md"
      lineHeight="taller"
      mb={4}
      color="gray.800"
      {...props}
    />
  ),
  a: (
    props: JSX.IntrinsicAttributes & { as?: "a" | undefined } & LinkProps &
      Omit<
        DetailedHTMLProps<
          AnchorHTMLAttributes<HTMLAnchorElement>,
          HTMLAnchorElement
        >,
        keyof LinkProps
      >
  ) => <Link color="blue.500" textDecoration="underline" {...props} />,
  ul: (
    props: JSX.IntrinsicAttributes & { as?: "ul" | undefined } & ListProps &
      Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
        keyof ListProps
      >
  ) => <List styleType="disc" pl={5} {...props} />,
  li: (
    props: JSX.IntrinsicAttributes & { as?: "li" | undefined } & ListItemProps &
      Omit<
        DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
        keyof ListItemProps
      >
  ) => <ListItem mb={2} {...props} />,
  code: (
    props: JSX.IntrinsicAttributes & { as?: "code" | undefined } & CodeProps &
      Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
        keyof CodeProps
      >
  ) => <Code colorScheme="neutral" {...props} />,
};
