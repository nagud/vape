const buildBaseUrl = import.meta.env.BASE_URL;

const getRuntimeBaseUrl = () => {
  if (buildBaseUrl !== "/") {
    return buildBaseUrl;
  }

  if (globalThis.location?.pathname.startsWith("/app/")) {
    return "/app/";
  }

  return "/";
};

export const assetPath = (path: string) => {
  const baseUrl = getRuntimeBaseUrl();
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.replace(/^\/+/, "");

  return `${cleanBase}${cleanPath}`;
};

export const routerBasename =
  getRuntimeBaseUrl() === "/" ? undefined : getRuntimeBaseUrl().replace(/\/$/, "");
