const breakpoints = { sm: 576, md: 768, lg: 1366 };

export const mediaQueries = (size, direction='min') => {
  return (style) => `@media (${direction}-width: ${breakpoints[size]}px) { ${style} }`;
};



