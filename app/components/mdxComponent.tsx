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
  h3: (
    props: JSX.IntrinsicAttributes & { as?: "h1" | undefined } & HeadingProps &
      Omit<
        DetailedHTMLProps<
          HTMLAttributes<HTMLHeadingElement>,
          HTMLHeadingElement
        >,
        keyof HeadingProps
      >
  ) => (
    <Heading as="h3" fontSize="" mt={8} mb={4} color="brand.300" {...props} />
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
  ) => <Text fontSize="md" lineHeight="taller" mb={4} {...props} />,
  a: (
    props: JSX.IntrinsicAttributes & { as?: "a" | undefined } & LinkProps &
      Omit<
        DetailedHTMLProps<
          AnchorHTMLAttributes<HTMLAnchorElement>,
          HTMLAnchorElement
        >,
        keyof LinkProps
      >
  ) => {
    return (
      <Link
        color="blue.500"
        textDecoration="underline"
        target={"_blank"}
        rel={"noopener noreferrer"}
        {...props}
      />
    );
  },
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
  ) => {
    const isInPre = props.children && Array.isArray(props.children);

    return (
      <Code
        whiteSpace={isInPre ? "pre" : "normal"}
        display={isInPre ? "block" : "inline"}
        overflowX={isInPre ? "auto" : "initial"}
        padding={isInPre ? "0.4rem" : "0.2rem"}
        fontSize={isInPre ? "sm" : "inherit"}
        color={isInPre ? "inherit" : "emerald.500"}
        {...props}
      />
    );
  },
  pre: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
  ) => (
    <pre
      style={{
        whiteSpace: "pre",
        overflowX: "auto",
        padding: "1rem",
      }}
      {...props}
    />
  ),
};
