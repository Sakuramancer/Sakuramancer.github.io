import { InitiativeList, initiatives } from "../../features/Initiative";

const InitiativeListPage = () => {
  document.title = "Инициативы | Кампания из Эвенглена";
  const data = Object.values(initiatives);

  return <InitiativeList data={data} />;
};

export default InitiativeListPage;
