import SessionList from "../components/SessionList";
import sessions from "../data/sessions.json";

const SessionsPage = () => {
  document.title = "Сессии | Кампания из Эвенглена";

  const data = Object.values(sessions)
    .filter((item) => item.date)
    .sort((first, second) => {
      const byDate = (first.date < second.date) - (second.date < first.date);
      return byDate === 0
        ? (first.id < second.id) - (second.id < first.id)
        : byDate;
    });
  return <SessionList data={data} />;
};

export default SessionsPage;
