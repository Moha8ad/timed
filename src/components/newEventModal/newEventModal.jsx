import { useState } from "react";

const NewEventModal = ({ onSave, onClose }) => {
  const [toDoItem, setToDoItem] = useState("");
  const [error, setError] = useState(false);

  return (
    <div>
      <div id="timed-newEventModal">
        <h3>New Event</h3>
        <input
          className={error ? "timed-error" : ""}
          type="text"
          id="timed-eventTitleInput"
          placeholder="Event Title "
          value={toDoItem}
          onChange={(e) => setToDoItem(e.target.value)}
        />
        <button
          className="timed-button"
          id="timed-saveButton"
          onClick={() => {
            if (toDoItem) {
              setError(false);
              onSave(toDoItem);
              setToDoItem("");
            } else {
              setError(true);
            }
          }}
        >
          Save
        </button>

        <button
          className="timed-button"
          id="timed-cancelButton"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
      <div id="timed-modalBackDrop"></div>
    </div>
  );
};

export default NewEventModal;
