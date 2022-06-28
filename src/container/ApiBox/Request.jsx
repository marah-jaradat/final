import React from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import "./request.css";

const Request = ({ sendHandler, body, setBody, headers, setHeaders }) => {
  return (
    <React.Fragment>
      <div className="mb-3 app__bg">
        <MDBBtnGroup shadow="0" className="nav " id="pills-tab" role="tablist">
          <MDBBtn
            className="btn"
            color="dark"
            data-bs-toggle="pill"
            data-bs-target="#pills-body"
            type="button"
            role="tab"
            aria-controls="pills-body"
            aria-selected="true"
          >
            Body
          </MDBBtn>

          <MDBBtn
            className="btn"
            color="dark"
            data-bs-toggle="pill"
            data-bs-target="#pills-headers"
            type="button"
            role="tab"
            aria-controls="pills-headers"
            aria-selected="false"
          >
            Headers
          </MDBBtn>

          <MDBBtn className="send" onClick={sendHandler}>
            Send
          </MDBBtn>
        </MDBBtnGroup>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="text tab-pane fade show active"
            id="pills-body"
            role="tabpanel"
            aria-labelledby="pills-body-tab"
          >
            <textarea
              name="body"
              className=" border border-1 rounded p-3 "
              id="body"
              value={body}
              cols="70"
              rows="10"
              style={{
                width: "605px",
                height: "246px",
              }}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div
            className="tab-pane fade"
            id="pills-headers"
            role="tabpanel"
            aria-labelledby="pills-headers-tab"
          >
            <textarea
              name="headers"
              className=" border border-1 rounded p-3"
              value={headers}
              id="headers"
              cols="70"
              rows="10"
              style={{
                width: "605px",
                height: "246px",
              }}
              onChange={(e) => setHeaders(e.target.value)}
            >
              {headers}
            </textarea>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Request;
