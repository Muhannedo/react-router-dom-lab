import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => (
  <div>
    <h2>Mailboxe List</h2>
    {mailboxes.map((mailbox) => (
      <div key={mailbox._id} className="mail-box">
        <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
      </div>
    ))}
  </div>
);

export default MailboxList;
