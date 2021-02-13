import React from 'react'

export default function Skill(props) {
  const skillListItems = []
  for (const [index, value] of props.tools.entries()) {
    skillListItems.push(<li key={index}>{value}</li>)
  }

  return (
    <div id="skill-card">
      <div id="skill-title">
        {props.title}
      </div>
      <ul>
        {skillListItems}
      </ul>
    </div>
  )
}