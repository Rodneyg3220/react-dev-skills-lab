import React from 'react';
import "./SkillListItem.css";

function SkillListItem ({skill}) {
    return (
    <li className="SkillListItem">
    {skill.name}
    {skill.level}
  </li>
)
}

export default SkillListItem;