import {
  Form,
  useNavigate,
  useNavigation,
  useSearchParams,
  json,
  redirect,
} from "react-router-dom";
import { ColorPicker } from "../../../components/UI";
import { TokenSvg } from "../../../components/svg";
import tokenTestMap from "../assets/tokenTestMap.png";

import classes from "./ChangeToken.module.css";

const ChangeToken = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sheetId = searchParams.get("sheet") || "";
  const mainColor = searchParams.get("mainColor") || "#FFFFFF";
  const backColor = searchParams.get("backColor") || "#000000";
  const letter = searchParams.get("letter") || "A";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const cancelHandler = () => {
    navigate(`/kie/characters/${sheetId}`);
  };
  const navigate = useNavigate();
  const mainColorHandler = (color) => {
    setSearchParams(
      (prev) => {
        prev.set("mainColor", color.hex);
        return prev;
      },
      {
        replace: true,
      }
    );
  };
  const backColorHandler = (color) => {
    setSearchParams(
      (prev) => {
        prev.set("backColor", color.hex);
        return prev;
      },
      {
        replace: true,
      }
    );
  };

  return (
    <section className={classes.main}>
      <section className={classes.showcase}>
        <div className={classes.pickerBlock}>
          <h1 className={classes.header}>Основной цвет</h1>
          <ColorPicker color={mainColor} onChange={mainColorHandler} />
        </div>
        <div className={classes.vertical} />
        <div className={classes.pickerBlock}>
          <h1 className={classes.header}>Цвет фона</h1>
          <ColorPicker color={backColor} onChange={backColorHandler} />
        </div>
        <div className={classes.tokenBlock}>
          <TokenSvg
            size="100px"
            mainColor={mainColor}
            backColor={backColor}
            letter={letter}
          />
          <TokenSvg
            size="48px"
            mainColor={mainColor}
            backColor={backColor}
            letter={letter}
          />
          <TokenSvg
            size="24px"
            mainColor={mainColor}
            backColor={backColor}
            letter={letter}
          />
        </div>
        <div className={classes.tokenTest}>
          <img
            className={classes.tokenTest_map}
            src={tokenTestMap}
            alt="Token Test Map"
          />
          <TokenSvg
            size="35px"
            className={classes.tokenTest_svg}
            mainColor={mainColor}
            backColor={backColor}
            letter={letter}
          />
        </div>
      </section>
      {sheetId && (
        <Form method="POST" className={classes.actions}>
          <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
            Отмена
          </button>
          <button className={classes.saveButton} disabled={isSubmitting}>
            Сохранить
          </button>
        </Form>
      )}
    </section>
  );
};

export default ChangeToken;

export async function action({ request }) {
  const search = new URL(request.url).searchParams;
  const sheetId = search.get("sheet");
  const params = {
    sheet: sheetId,
    mainColor: search.get("mainColor") || "",
    backColor: search.get("backColor") || "",
    letter: search.get("letter") || "",
  };
  const commentData = {
    name: "CHANGE_TOKEN_URL",
    comment: JSON.stringify(params),
    datetime: new Date().toLocaleString(),
  };

  const url =
    "https://evenglen-campaign-default-rtdb.europe-west1.firebasedatabase.app/comments.json";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Ошибка при отправке." }, { status: 500 });
  }

  return redirect(`/kie/characters/${sheetId}`);
}
