import { tab } from "@testing-library/user-event/dist/tab";
import React, { useRef, useState } from "react";

export default function Contact() {
  const em = useRef();
  const msg = useRef();
  const [table, setTable] = useState({});
  const [counTable, setCountTable] = useState([]);
  const [btn, setBtn] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    setBtn(true);
    if (em.current.value.length > 5 && msg.current.value.length > 5) {
      setTable({
        ...table,
        ...{ em: em.current.value, msg: msg.current.value },
      });
      setCountTable([...counTable, em.current.value, msg.current.value]);
    }
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Contact Us</h2>
      {btn && (
        <>
          {counTable.length > 0 ? (
            <>
              <div className="alert alert-success p-5 mt-5" role="alert">
                <strong>Thank you {table.em} Your for Your Message</strong>{" "}
                <br />
                {table.msg}
              </div>
            </>
          ) : (
            <div className="alert alert-danger p-5 mt-5" role="alert">
              <strong>Verify Your informations</strong>
            </div>
          )}
        </>
      )}
      <form onSubmit={handelSubmit}>
        <div className="mb-3 form-group">
          <label htmlFor="em" className="form-label">
            Email
          </label>
          <input
            ref={em}
            type="email"
            className="form-control"
            name="em"
            id="em"
            aria-describedby="emailHelpId"
            placeholder=" Ex abc@mail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="msg" className="form-label">
            Message
          </label>
          <textarea
            ref={msg}
            className="form-control"
            name="msg"
            placeholder="Your Message"
            id="msg"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send
        </button>
      </form>
    </div>
  );
}
