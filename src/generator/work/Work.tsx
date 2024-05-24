import React from "react";
import { Col } from "react-bootstrap";

interface Props{
  id :  number,
  title : string,
  date : string,
  description : string
}

const Work = ({id  , title , date, description}: Props) => {
  return (
    <>
      <li>
          <Col>
              <h5 className="fw-bolder text-capitalize">{title}</h5>
              <time className="text-muted">{date}</time>
              <p>{description}</p>
          </Col>
       </li>
    </>
  )
  }


export default Work;
