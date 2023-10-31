import { CharacterList } from "../features/Characters";

const HomePage = () => {
  document.title = "Кампания из Эвенглена";
  return (
    <CharacterList />
  );
};

export default HomePage;
