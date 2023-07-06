import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./CommentsForm.module.css";

const CommentsForm = () => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }
  const name = "";

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
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="on"
          autoFocus
          defaultValue={name ? name : ""}
        />
      </p>
      <p>
        <label htmlFor="comment">Комментарий</label>
        <textarea
          id="comment"
          name="comment"
          rows="5"
          required
          defaultValue={""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Отмена
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </div>
    </Form>
  );
};

export default CommentsForm;

export async function action({ request }) {
  const data = await request.formData();

  const commentData = {
    name: data.get("name"),
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
