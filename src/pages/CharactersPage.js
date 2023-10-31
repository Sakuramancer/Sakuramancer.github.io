import { CharacterList } from "../features/Characters";

const CharactersPage = () => {
  document.title = "Персонажи | Кампания из Эвенглена";
  return (
    <CharacterList />
  );
};

export default CharactersPage;
