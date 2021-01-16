const breakpoints = { sm: 576, md: 768, lg: 1366 };

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
