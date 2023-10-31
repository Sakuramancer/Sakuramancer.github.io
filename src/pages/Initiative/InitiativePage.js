import { useParams } from "react-router-dom";
import { Initiative } from "../../features/Initiative";
import initiatives from "../../features/Initiative/data/initiatives.json";

const InitiativePage = ({ stream }) => {
  let data = undefined;
  document.title = "Кампания из Эвенглена";
  const params = useParams();

  if (params !== undefined && initiatives[params.id] !== undefined) {
    data = initiatives[params.id];
    document.title = `${data.title} | Кампания из Эвенглена`;
  }
  return <Initiative stream={stream} data={data} />;
};

export default InitiativePage;
