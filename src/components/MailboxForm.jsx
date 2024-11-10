import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxholder, boxSize });
    setBoxholder("");
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Mailbox</h2>
      <label htmlFor="boxholder">Boxholder Name:</label>
      <input
        type="text"
        value={boxholder}
        onChange={(e) => setBoxholder(e.target.value)}
        placeholder="Boxholder Name"
      />
      <label htmlFor="boxSize"> Select a Box Size:</label>
      <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};
export default MailboxForm;
