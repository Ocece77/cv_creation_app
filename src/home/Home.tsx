import React from "react";
import { Container , Row , Col ,Button} from "react-bootstrap";
import photo from '../assets/cvexample.jpeg';
import { Link  } from "react-router-dom";
import './home.scss';



function Home (){

  return (
    <>
    <Container fluid id="home" className="h-100" >
      <Row   className="h-100" >
         {/*Left part */}
          <Col  md={5} sm={12} className=" d-flex shadow justify-content-center flex-column p-5" >
                <h1 className="title fw-light mb-4" >Create your resume now</h1>

                <Link to='/generator'>
                    <Button  variant="primary" size="lg" className="col-4 col-md-4 text-light"> Start </Button>
                </Link>
              
          </Col>
       

        {/*Right part */}
        <Col md={7}  sm={12} className="container-image">
          <img src={photo} alt="example" />
          </Col>
       
      </Row>

    </Container>


    </>
  )
}

export default Home;