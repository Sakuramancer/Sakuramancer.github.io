import { useQuery } from "@tanstack/react-query";
import MonsterList from "../components/MonsterList";
import { fetchMonsters } from "../../../utils/http";
import { Error, LoadSpinner } from "../../../components/UI";

const MonsterListPage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["monsters"],
    queryFn: fetchMonsters,
    staleTime: 60 * 1000,
  });

  document.title = "Монстры | Кампания из Эвенглена";
  if (isPending) {
    return <LoadSpinner />;
  }
  if (isError) {
    return <Error message={error.info || "Мы потеряли список монстров!"} />;
  }
  if (data) {
    const items = Object.values(data).sort(
      (first, second) => (first.name > second.name) - (first.name < second.name)
    );
    return <MonsterList items={items} />;
  }
};

export default MonsterListPage;
