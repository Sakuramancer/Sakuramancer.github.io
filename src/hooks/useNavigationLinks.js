import { useMatches } from "react-router-dom";

export function useNavigationLinks() {
  const matches = useMatches();
  const links = matches
    .filter((match) => Boolean(match.handle?.links))
    .map((match) => match.handle.links)[0];
  return links ? links : [];
}
