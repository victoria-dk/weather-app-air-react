import React from "react";

export default function DayTime(props) {
  let sunrise = props.date.sys.getSunrise();
  let sunset = props.date.sys.getSunset();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {sunrise} {sunset} {hours}:{minutes}
    </div>
  );
}
