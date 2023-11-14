import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Error, LoadSpinner } from "../../../components/UI";
import { fetchMonster } from "../../../utils/http";
import Monster from "../components/Monster";
import { monsterAssets } from "../assets/Assets";

const MonsterPage = () => {
  const { id } = useParams();
  const {
    data: monster,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["monsters", { id }],
    queryFn: ({ signal }) => fetchMonster({ signal, id }),
    staleTime: 60 * 1000
  });

  if (isPending) {
    return <LoadSpinner />;
  }
  if (isError) {
    return (
      <Error message={error.info || "Мы потеряли этого монстра!"} />
    );
  }
  let asset = monsterAssets[id];
  if (!asset) asset = { path: "", alt: "" };
  document.title = `${monster.name} | Кампания из Эвенглена`;
  return <Monster monster={{ id, ...monster }} asset={asset} />;
};

export default MonsterPage;

export const monsterHandle = {
  links: [
    {
      link: "#top",
      src: "В",
      tooltip: "Вверх",
    },
    {
      link: "#actions",
      src: "Д",
      tooltip: "Действия",
    },
    {
      link: "#bonus_actions",
      src: "БД",
      tooltip: "Бонусные действия",
    },
    {
      link: "#reactions",
      src: "Р",
      tooltip: "Реакции",
    },
  ],
};
