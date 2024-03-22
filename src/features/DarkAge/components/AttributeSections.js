import { useMemo } from "react";
import AttributeGroup from "./AttributeGroup";
import classes from "./AttributeSections.module.css";

const attributeMap = (sheet) => [
  {
    key: "attributes",
    name: "Характеристики",
    groups: [
      {
        key: "physical",
        title: "Физические",
        data: sheet.attributes.physical,
      },
      {
        key: "social",
        title: "Социальные",
        data: sheet.attributes.social,
      },
      {
        key: "mental",
        title: "Ментальные",
        data: sheet.attributes.mental,
      },
    ],
  },
  {
    key: "abilities",
    name: "Способности",
    groups: [
      {
        key: "talents",
        title: "Таланты",
        data: sheet.abilities.talents,
      },
      {
        key: "skills",
        title: "Навыки",
        data: sheet.abilities.skills,
      },
      {
        key: "knowledges",
        title: "Знания",
        data: sheet.abilities.knowledges,
      },
    ],
  },
  {
    key: "advantages",
    name: "Преимущества",
    groups: [
      {
        key: "disciplines",
        title: "Дисциплины",
        data: sheet.disciplines,
      },
      {
        key: "backgrounds",
        title: "Факты биографии",
        data: sheet.backgrounds,
      },
      {
        key: "virtues",
        title: "Добродетели",
        data: sheet.virtues,
      },
    ],
  },
];

const AttributeSections = ({ sheet }) => {
  const sections = useMemo(() => attributeMap(sheet), [sheet]);
  return (
    <>
      {sections.map((section) => (
        <section key={section.key} className={classes.attributes}>
          <h2>{section.name}</h2>
          {section.groups.map((group) => (
            <AttributeGroup
              key={group.key}
              title={group.title}
              attributes={group.data}
            />
          ))}
        </section>
      ))}
    </>
  );
};

export default AttributeSections;
