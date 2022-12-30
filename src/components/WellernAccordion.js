import { Accordion } from "react-bootstrap";
const WellernAccordion = ({ title, eventName, children, active, onClick, className }) => {
  return (
    <div className="border">
      <Accordion.Toggle
        className={`card-header bg-white w-100 ${active !== eventName ? "collapsed" : ""}`}
        eventKey={eventName}
        onClick={() => onClick()}
      >
        {title} <span className="toggle-btn" />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventName}>
        <div className="card-body bg-white">{children}</div>
      </Accordion.Collapse>
    </div>
  );
};
export default WellernAccordion;
