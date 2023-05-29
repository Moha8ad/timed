import { useState } from "react";

const EventModal = ({
  onSave,
  onDeleteAll,
  onDeleteOne,
  eventText,
  onClose,
}) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  return (
    <div>
      <div id="timed-deleteEventModal">
        <h3>New Event</h3>
        <input
          className={error ? "timed-error" : ""}
          type="text"
          id="timed-eventTitleInput"
          placeholder="Event Title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="timed-button"
          id="timed-saveButton"
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
              setTitle("");
            } else {
              setError(true);
            }
          }}
        >
          Save
        </button>
        <h2>--------------</h2>
        <h6>
          <i>Your Event for Today</i>
        </h6>
        {!eventText ? (
          <div style={{ padding: "10px 0 20px", fontSize: ".9rem" }}>
            Nothing!
          </div>
        ) : (
          <span>
            <ol id="timed-eventText">
              {eventText.titles.map((item, key) => (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <li key={key}>{item}</li>
                  <button
                    style={{
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "10px",
                      color: "red",
                    }}
                    onClick={() => onDeleteOne(key)}
                  >
                    -
                  </button>
                </div>
              ))}
            </ol>
            <button
              onClick={onDeleteAll}
              className="timed-button"
              id="timed-deleteButton"
            >
              Delete All
            </button>
          </span>
        )}
        <button
          onClick={onClose}
          className="timed-button"
          id="timed-closeButton"
        >
          Close
        </button>
      </div>
      <div id="timed-modalBackDrop"></div>
    </div>
  );
};

export default EventModal;
