'use client'
export function getWindowMeasure() {
  const windowWidth = window.innerWidth;

  const viewportWidthMapper = {
    xs: [0, 640],
    sm: [640, 768],
    md: [768, 1024],
    lg: [1024, 1280],
    xl: [1280, 1536],
  };

  type key = keyof typeof viewportWidthMapper 

  const value = Object.entries(viewportWidthMapper).find(
    (val, ind) => windowWidth < val[1][1] && windowWidth > val[1][0]
  );

  const result: key | null = value ? value[0] as key : null;

  return result
}
