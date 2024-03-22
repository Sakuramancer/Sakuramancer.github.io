import { sha512 } from "js-sha512";

export const getAuthTokens = () =>
  JSON.parse(localStorage.getItem("AuthTokens"));

export const updateAuthTokens = (newTokens) => {
  const tokens = getAuthTokens();
  localStorage.setItem(
    "AuthTokens",
    JSON.stringify({ ...tokens, ...newTokens })
  );
};

export const checkAuthToken = (schemeId, token = undefined) => {
  if (!token) {
    const tokens = getAuthTokens();
    if (!tokens) return false;
    token = tokens[schemeId];
  }
  const expectedHash = tokenSha[schemeId];
  return expectedHash && token && expectedHash === sha512(token);
};

export const tokenSha = {
  darkAge:
    "d09a9d930a7c5698afbf353daf023624e21b3ff5732f453519c6a09530da814f8476e55291474ce396f4faee0f0e855001d61361d9c3852b719e6edccb125feb",
  kie: "34261fe231865b56069dbcfcc7bf760c904871a6357cf97e299942b5e3462576f092866ba35a2da4c0dec362c1098147636e576216ad5b579799c25ae40050b1",
};
