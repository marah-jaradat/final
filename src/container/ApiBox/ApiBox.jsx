import React from "react";
import { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { images } from "../../constants";
import "./ApiBox.css";

const ApiBox = ({ url, setUrl, method, setMethod }) => {
  const [choice, setChoice] = useState({ method });
  const handleChoice = (event) => {
    setChoice(event.target.value);
  };

  return (
    <div
      className="app__api app__bg flex__center section__padding"
      id="API-Checker"
    >
      <div className="Api-check flex__center ">
        <MDBInput
          className="input"
          label="Enter URL"
          id="typeText"
          type="text"
          aria-label="url"
          aria-describedby="basic-addon1"
          style={{ width: 500 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div>
        <Box sx={{ width: 120 }}>
          <FormControl className="form" fullWidth>
            <InputLabel className="label" id="demo-simple-select-label">
              Method
            </InputLabel>
            <Select
              className="select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <MenuItem className="option" value="GET">
                GET
              </MenuItem>
              <MenuItem className="option" value="POST">
                POST
              </MenuItem>
              <MenuItem className="option" value="DELETE">
                DELETE
              </MenuItem>
              <MenuItem className="option" value="PUT">
                PUT
              </MenuItem>
              <MenuItem className="option" value="PATCH">
                PATCH
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default ApiBox;
