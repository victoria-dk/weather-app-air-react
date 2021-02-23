import React from "react";

export default function DayTime(props) {
  let time = new Date(props.time);
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {" "}
      {hours}:{minutes}
    </span>
  );
}
