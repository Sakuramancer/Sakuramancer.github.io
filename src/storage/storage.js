import { initStorage } from "../hooks/useStorage";

export const configureStorage = () => {
  const actions = {
    TOGGLE_NAV_TOKEN: (currentState, token) => {
      const newTokens = { ...currentState.navTokens };
      if (newTokens[token.id]) delete newTokens[token.id];
      else newTokens[token.id] = token;
      localStorage.setItem("nav_tokens", JSON.stringify(newTokens));
      return { navTokens: newTokens };
    },
  };

  let initialNavTokens = JSON.parse(localStorage.getItem("nav_tokens"));
  if (!initialNavTokens) initialNavTokens = {};

  initStorage(actions, { navTokens: initialNavTokens });
};
