import React from "react";
import { Col } from "react-bootstrap";


interface Props{
  id :  number,
  majorName : string,
  date : string,
  majorInstitution : string

}

const Major =  ({id, majorName ,date, majorInstitution}: Props) => {
  return (
    <>
      <li>
          <Col>
              <h5 className="fw-bolder text-capitalize">{majorName}</h5>
              <time className="text-muted">{date}</time>
              <p>{majorInstitution}</p>
          </Col>
       </li>
    </>
  )
}

export default Major