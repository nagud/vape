const baseUrl = import.meta.env.BASE_URL;

export const assetPath = (path: string) => {
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.replace(/^\/+/, "");

  return `${cleanBase}${cleanPath}`;
};

export const routerBasename = baseUrl === "/" ? undefined : baseUrl.replace(/\/$/, "");
