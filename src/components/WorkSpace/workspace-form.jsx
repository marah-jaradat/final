import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';
import {
    MDBInputGroup,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function WorkSpaceForm() {
    const [show, setShow] = useState(false);

    const showForm = () => {
        setShow(!show);
    }


    return (

  
<React.Fragment>
<ul className="list-group ms-5">
<MDBBtn onClick={showForm} color = 'dark'>Add WorkSpace</MDBBtn>
<MDBCollapse show={show}>
{!show?<div></div>: (
      <div>
      {showForm && (
        <MDBCard background='dark' className='text-white' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Add new WorkSpace</MDBCardHeader>
        <MDBCardBody>
        <MDBInputGroup className='mb-3'>
        <MDBBtn  style={{backgroundColor : 'gray'}} onClick = {showForm}>create</MDBBtn>
        <input className='form-control' type='text' />
      </MDBInputGroup>
        </MDBCardBody>
      </MDBCard>
      )}
      </div>
        )}
      </MDBCollapse>
  
</ul>
</React.Fragment>
)


      }



