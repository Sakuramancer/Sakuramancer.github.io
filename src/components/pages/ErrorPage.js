import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const ErrorPage = (props) => {
  return (
    <Layout>
      <h1>Что-то пошло не так!</h1>
      <p>Мы не нашли у себя такой страницы</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </Layout>
  );
}

export default ErrorPage;
