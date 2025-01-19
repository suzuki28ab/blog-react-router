import { type UsageTheme, extendTheme } from "@yamada-ui/react";
import { semantics } from "./semantics";
import { tokens } from "./tokens";
// import { styles } from './styles'
// import { components } from './components'

const customTheme: UsageTheme = {
  // styles,
  // components,
  ...tokens,
  semantics,
};

export const theme = extendTheme(customTheme)();
