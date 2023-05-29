const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return (
    <div id="timed-header">
      <div id="timed-monthDisplay">{dateDisplay}</div>
      <div>
        <button onClick={onBack} className="timed-button" id="timed-backButton">
          Back
        </button>
        <button onClick={onNext} className="timed-button" id="timed-nextButton">
          Next
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
