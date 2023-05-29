const TimedDay = ({ day, onClick }) => {
  const timedClassName = `timed-day ${
    day.value === "timed-padding" ? "timed-padding" : ""
  } ${day.isCurrentDay ? "timed-currentDay" : ""}`;
  console.log(day.event);
  return (
    <div onClick={onClick} className={timedClassName}>
      {day.value === "timed-padding" ? "" : day.value}

      {!!day.event?.titles.length && (
        <div className="timed-event">
          {day.event.titles.map((item, key) => (
            <div key={key}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimedDay;
