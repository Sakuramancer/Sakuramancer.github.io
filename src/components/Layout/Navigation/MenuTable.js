import MenuLink from "./MenuLink";

import classes from "./MenuTable.module.css";
import palletes from "../../../palletes.module.css";

const menuData = [
  {
    type: "link",
    visible: false,
    to: "",
    label: "Ссылки",
  },
  {
    type: "link",
    visible: true,
    to: "/kie/characters",
    label: "Персонажи",
  },
  {
    type: "link",
    visible: true,
    to: "/kie/magicItems",
    label: "Предметы",
  },
  {
    type: "link",
    visible: false,
    to: "",
    label: "Заклинания",
  },
  { type: "line" },
  {
    type: "link",
    visible: false,
    to: "/kie/initiatives",
    label: "Инициативы",
  },
  { type: "line" },
  {
    type: "link",
    visible: true,
    to: "/kie/addComment",
    label: "Оставить комментарий",
  },
  {
    type: "link",
    visible: false,
    to: "",
    label: "Настройки",
  },
];
const MenuTable = ({ schemeId, onConfirm }) => {
  const pallete = palletes[schemeId];
  return (
    <div className={[classes.menu, pallete].join(" ")}>
      {menuData
        .filter(
          (item) =>
            item.type === "line" || (item.type === "link" && item.visible)
        )
        .map((item, index) => {
          if (item.type === "link") {
            return (
              <MenuLink
                key={index}
                to={item.to}
                label={item.label}
                onConfirm={onConfirm}
              />
            );
          }
          return <div key={index} className={classes.line} />;
        })}
    </div>
  );
};

export default MenuTable;
