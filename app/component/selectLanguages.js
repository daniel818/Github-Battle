/**
 * Created by Daniel on 18/01/2018.
 */
/**
 * Created by Daniel on 18/01/2018.
 */
import React from "react";

export default function({ selectedLanguage, updateLanguge }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  const renderList = languages.map((lang, i) => (
    <li
      style={lang === selectedLanguage ? { color: "#d0021b" } : null}
      key={i}
      onClick={() => updateLanguge(lang)}
    >
      {lang}
    </li>
  ));

  return <ul className="languages">{renderList}</ul>;
}
