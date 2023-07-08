import { useReducer } from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./CommentsForm.module.css";

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    const isValid = action.value.trim().length > 0;
    return {
      value: action.value,
      showValidation: !isValid,
      isValid: isValid,
    };
  }
  if (action.type === "INPUT_BLUR") {
    const isValid = state.value.trim().length > 0;
    return {
      value: state.value,
      showValidation: !isValid,
      isValid: isValid,
    };
  }
  return { value: "", showValidation: true, isValid: false };
};

const CommentsForm = () => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  let name = localStorage.getItem("commentator_name");
  if (name === null) name = "";

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: name,
    showValidation: false,
    isValid: name.trim().length > 0,
  });

  const changeNameHandler = (event) => {
    dispatchName({ type: "USER_INPUT", value: event.target.value });
  };

  const validateNameHandler = () => {
    dispatchName({ type: "INPUT_BLUR" });
  };

  const cancelHandler = () => {
    navigate("..");
  };

  return (
    <Form method="POST" className={classes.form}>
      <h1> Оставьте комментарий</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="name">
          Имя
          {nameState.showValidation && (
            <span className={classes.invalid}>Введите имя</span>
          )}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="on"
          autoFocus={!name}
          defaultValue={name}
          onChange={changeNameHandler}
          onBlur={validateNameHandler}
        />
      </p>
      <p>
        <label htmlFor="comment">Комментарий</label>
        <textarea
          id="comment"
          name="comment"
          rows="5"
          required
          autoFocus={!!name}
          defaultValue={""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Отмена
        </button>
        <button disabled={isSubmitting || !nameState.isValid}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </div>
    </Form>
  );
};

export default CommentsForm;

export async function action({ request }) {
  const data = await request.formData();
  const name = data.get("name");
  localStorage.setItem("commentator_name", name);
  const commentData = {
    name: name,
    comment: data.get("comment"),
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

  return redirect("/");
}
