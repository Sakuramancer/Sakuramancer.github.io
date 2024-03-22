import { useEffect, useState } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import { sha512 } from "js-sha512";
import { checkAuthToken, updateAuthTokens } from "../utils/auth";
import { schemes } from "../utils/schemes";

import classes from "./PassKeyLink.module.css";
import palletes from "../palletes.module.css";

const PassKeyLink = ({ schemeId }) => {
  const actionData = useActionData();
  const [actionMessage, setActionMessage] = useState();
  useEffect(() => {
    if (actionData && actionData[schemeId]) {
      setActionMessage(actionData[schemeId]);
    }
  }, [actionData, schemeId]);

  const { authTokens } = useLoaderData();
  const token = authTokens && authTokens[schemeId];
  const tokenIsValid = token && checkAuthToken(schemeId, token);
  const passKeyId = `passKey_${schemeId}`;
  const scheme = schemes[schemeId];
  const pallete = palletes[schemeId];

  if (tokenIsValid) {
    return (
      <Link to={scheme.path}>
        <div className={[classes.main, classes.hoverable, pallete].join(" ")}>
          <h1>{scheme.title}</h1>
        </div>
      </Link>
    );
  }
  return (
    <div className={[classes.main, pallete].join(" ")}>
      <h1>{scheme.title}</h1>
      <Form className={classes.question} method="POST">
        <label htmlFor={passKeyId}>
          Введите ключевое слово:
          {actionMessage && (
            <span className={classes.error}>{actionMessage}</span>
          )}
        </label>
        <input
          name={passKeyId}
          id={passKeyId}
          type="text"
          autoComplete="off"
          required
          onChange={() => setActionMessage(null)}
        />
        <div className={classes.actions}>
          <button className={classes.submit}>Войти</button>
        </div>
      </Form>
    </div>
  );
};

export default PassKeyLink;

export async function action({ request }) {
  const data = await request.formData();
  for (let [key, value] of data) {
    const [passKey, schemeId] = key.split("_");
    if (passKey !== "passKey") {
      continue;
    }
    const token = sha512(value.toLowerCase());
    if (checkAuthToken(schemeId, token)) {
      updateAuthTokens({ [schemeId]: token });
      return redirect(`/${schemeId}`);
    }
    return { [schemeId]: "Неверный ключ." };
  }
  return { message: "Неизвестная ошибка." };
}
