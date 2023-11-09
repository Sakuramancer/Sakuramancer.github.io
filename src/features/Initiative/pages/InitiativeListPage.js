import InitiativeList from "../components/InitiativeList";
import initiatives from "../data/initiatives.json";

const InitiativeListPage = () => {
  document.title = "Инициативы | Кампания из Эвенглена";
  const data = Object.values(initiatives);

  return <InitiativeList data={data} />;
};

export default InitiativeListPage;
