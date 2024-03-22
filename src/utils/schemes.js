import { redirect } from "react-router-dom";
import { checkAuthToken, getAuthTokens } from "./auth";

export const schemes = {
  sakuramancer: {
    id: "sakuramancer",
    path: "/",
    title: "Sakuramancer",
    shortTitle: "Sakuramancer",
    showNavigation: false,
    meta: {
      icon: "/sakuramancer.ico",
      appleTouchIcon: "/sakuramancer512.png",
      manifest: "/manifest.json",
      themeColor: "#911E42",
    },
  },
  kie: {
    id: "kie",
    path: "/kie",
    title: "Кампания из Эвенглена",
    shortTitle: "КиЭ",
    showNavigation: true,
    meta: {
      icon: "/kie.ico",
      appleTouchIcon: "/kie512.png",
      manifest: "/kie_manifest.json",
      themeColor: "#fff59e",
    },
  },
  darkAge: {
    id: "darkAge",
    path: "/darkAge",
    title: "Вампиры. Темные века",
    shortTitle: "Вампиры. Темные века",
    showNavigation: false,
    meta: {
      icon: "/darkAge.ico",
      appleTouchIcon: "/darkAge512.png",
      manifest: "/darkAge_manifest.json",
      themeColor: "#400000",
    },
  },
};

export const defaultScheme = schemes.sakuramancer;
export const schemeList = Object.keys(schemes);

export const getScheme = (pathname) => {
  const schemeId = pathname.split("/")[1];
  return schemeList.includes(schemeId) ? schemes[schemeId] : defaultScheme;
};

export const setMeta = (meta) => {
  let link = document.querySelector('link[rel="icon"]');
  link?.setAttribute("href", meta.icon);

  link = document.querySelector('link[rel="apple-touch-icon"]');
  link?.setAttribute("href", meta.appleTouchIcon);

  link = document.querySelector('link[rel="manifest"]');
  link?.setAttribute("href", meta.manifest);

  link = document.querySelector('meta[name="theme-color"]');
  link?.setAttribute("content", meta.themeColor);
};

export const rootLoader = ({ request }) => {
  const url = new URL(request.url);
  const scheme = getScheme(url.pathname);
  setMeta(scheme.meta);
  const authTokens = getAuthTokens();
  return { scheme: scheme.id, authTokens: authTokens };
};

export const schemeLoader = ({ request }) => {
  const url = new URL(request.url);
  const scheme = getScheme(url.pathname);
  setMeta(scheme.meta);
  return checkAuthToken(scheme.id) ? { scheme: scheme.id } : redirect("/");
};
