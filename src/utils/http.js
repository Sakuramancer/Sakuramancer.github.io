const HTTP_URL =
  "https://evenglen-campaign-default-rtdb.europe-west1.firebasedatabase.app";

export async function fetchMonsters({ signal }) {
  const response = await fetch(`${HTTP_URL}/monsters.json`, { signal });

  if (!response.ok) {
    const error = new Error(
      "В процессе загрузки списка монстров возникла ошибка."
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const monsters = await response.json();
  return monsters;
}

export async function fetchMonster({ signal, id }) {
  const response = await fetch(
    `${HTTP_URL}/monsters.json?orderBy="id"&equalTo="${id}"`,
    { signal }
  );
  if (!response.ok) {
    const error = new Error("В процессе загрузки монстра возникла ошибка.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const data = await response.json();
  const monster = data[id];
  if (!monster) {
    const error = new Error("В процессе загрузки монстра возникла ошибка.");
    error.code = 404;
    throw error;
  }
  return monster;
}
