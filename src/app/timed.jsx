import React, { useState, useEffect } from "react";

import { ReactComponent as AsArLogoLgWt } from "../assets/asar-logo.svg";

import CalendarHeader from "../components/calendar-header/calendar-header";
import EventModal from "../components/EventModal/EventModal";
import TimedDay from "../components/timed-day/timed-day";
import { useDate } from "../components/timed-date-hook/timed-date-hook";

import { updatedEvents } from "./timed.utils";

import "./timed.scss";

const Timed = () => {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const handleDeleteOne = (itemIndex) => {
    const objectIndex = events.findIndex((e) => e.date === clicked);
    const updatedEvents = events.map((event, index) =>
      index === objectIndex
        ? { ...event, titles: event.titles.filter((_, i) => i !== itemIndex) }
        : event
    );

    setEvents(updatedEvents);
  };

  const eventForDate = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

  return (
    <div className="timed-body">
      <div id="timed-container">
        <div style={{ minWidth: "100%" }}>
          <AsArLogoLgWt />
        </div>
        <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />
        <div id="timed-weekdays">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>

        <div id="timed-calendar">
          {days.map((d, index) => (
            <TimedDay
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== "timed-padding") {
                  setClicked(d.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {clicked && (
        <EventModal
          eventText={eventForDate(clicked)}
          onClose={() => setClicked(null)}
          onDeleteAll={() => {
            setEvents(events.filter((e) => e.date !== clicked));
          }}
          onDeleteOne={(key) => handleDeleteOne(key)}
          onSave={(title) => {
            setEvents(updatedEvents(events, title, clicked));
          }}
        />
      )}
    </div>
  );
};
export default Timed;
