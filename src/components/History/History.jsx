import React from "react";
import { useState } from "react";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";

const History = ({
  history,
  setHeaders,
  setMethod,
  setUrl,
  setBody,
  clearResponseTable,
}) => {
  const clickHistoryItemHandler = (e) => {
    const itemId = e.currentTarget.id;
    const requestItemConfig = history.find((item) => item.id === itemId);
    console.log(requestItemConfig);

    // set the data that exist in request item configuartion
    setMethod(requestItemConfig.method);
    setHeaders(requestItemConfig.headers);
    setUrl(requestItemConfig.url);
    setBody(requestItemConfig.body);

    clearResponseTable(); // clear the data of response table
  };
  const [show, setShow] = useState(false);

  //   const handleShow=()=>setShow(!show)

  const toggleShow = () => setShow(!show);

  return (
    <React.Fragment>
      <ul className="list-group ms-5">
        {/* <li className="list-group-item d-flex justify-content-center align-items-center pe-2 border-1 border-warning"> */}
        {/* <h3 onClick={()=>handleShow()} className="text-warning">History Table</h3> */}
        <MDBBtn onClick={toggleShow} color="dark">
          Your Requests
        </MDBBtn>
        {/* </li> */}
        <MDBCollapse show={show}>
          {!show ? (
            <div></div>
          ) : !history.length ? (
            <div className="text-center">No Requests have been made</div>
          ) : (
            history.map((requestItem) => (
              <li
                key={requestItem.id}
                id={requestItem.id}
                className="list-group-item d-flex btn justify-content-between align-items-center pe-2 border-1 border-warning border-top-0"
                onClick={clickHistoryItemHandler}
              >
                {requestItem.url}
                <span className="badge bg-primary rounded-pill">
                  {requestItem.method}
                </span>
              </li>
            ))
          )}
        </MDBCollapse>
      </ul>
    </React.Fragment>
  );
};

export default History;
