import { useLoaderData } from "react-router-dom";
import classes from "./AllComments.module.css";

const AllComments = () => {
  let commentsData = useLoaderData();

  return (
    <section className={classes.main}>
      {!commentsData && <div className={classes.card}>Комментариев нет</div>}
      {commentsData &&
        Object.entries(commentsData).map(([key, item]) => (
          <div key={key} className={classes.card}>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.datetime}>{item.datetime}</div>
            <div className={classes.comment}>{item.comment}</div>
          </div>
        ))}
    </section>
  );
};

export default AllComments;

export async function loader() {
  return await fetch(
    "https://evenglen-campaign-default-rtdb.europe-west1.firebasedatabase.app/comments.json"
  );
}
