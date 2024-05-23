
import React  , { useState , createElement} from "react";
import { Container , Col , Row , Accordion, Form ,InputGroup , Button} from "react-bootstrap";
import './generator.scss';
import DOMPurify from "dompurify";
import FormControl from "./form_control/FormControl";




function Generator(){

  const [bgcolor , setBgcolor] = useState<string>("#563d7c");
  const [color , setColor] = useState<string>("#ffffff");


  const [firstName , setfirstName] = useState<string>("");
  const [lastName , setLastname] = useState<string>("");
  const [email , setEmail] = useState<string>("");
  const [linkedin , setLinkedin] = useState<string>("");
  const [phone , setPhone] = useState<any>(undefined);
  const [location , setLocation] = useState<string>("");
  const [sum , setSum] = useState<string>("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis mollitia eius aliquam distinctio blanditiis recusandae sit maiores nostrum quasi iure voluptate, voluptatum odit quas similique,e illo illum, et ab enim");



  const [skills , setSkills] = useState<string[]>([])
  const [newSkill , setNewSkill] = useState<string>("")

  const addItem = () =>{
    (
      setSkills([...skills, newSkill]) 

       )
       setNewSkill((""))
      
  }

  const removeItem = (el : string) =>{
    (
      setSkills(skills.filter((item) => item != el)) 
       )
  }


  

  return (
    
    <>
    <Container fluid id="generator" >
      <Row >


     {/*left container */}
      <Col lg={5} md={12} className="border shadow py-5">
          <h1 className="fs-1 fw-bold text-center  mb-5">CV Generator</h1>
           <hr />
          <Accordion defaultActiveKey="0" className="mt-5" >


              {/*Principal information */}
              <Accordion.Item eventKey="0">

                <Accordion.Header>Basic information</Accordion.Header>

                    <Accordion.Body>
                      <Row className=" row-cols-2  gap-5 ">

                      <Col lg={5} md={12} sm={5} >
                      <FormControl id="First Name" value={firstName} type="text" setValue={setfirstName}/>
                      </Col>

                       <Col lg={5} md={12} sm={5} >
                       <FormControl id="Last Name" value={lastName} type="text" setValue={setLastname}/>
                      </Col>

                       <Col lg={5} md={12} sm={5} >
                       <FormControl id="Email" value={email} type="email" setValue={setEmail}/>
                      </Col>

                      <Col lg={5} md={12} sm={5} >
                       <FormControl id="Linkedin" value={linkedin} type="text" setValue={setLinkedin}/>
                      </Col>

                       <Col lg={5} md={12} sm={5} >
                       <FormControl id="Phone Number" value={phone} type="tel" setValue={setPhone}/>
                      </Col>

                       <Col lg={5} md={12} sm={5} >
                       <FormControl id="Location" value={location} type="text" setValue={setLocation}/>
                      </Col>


                       <Col lg={5} md={12} sm={5} >

                      <Form.Label htmlFor="summary">Summary </Form.Label>
                      <br/>
                       <Form.Control as="textarea" rows={3}
                          id = "summary"
                          onChange={(e)=> setSum(e.target.value)} />
                      </Col>
                                   
                      </Row>
                   </Accordion.Body>

              </Accordion.Item>


                {/*Job expérience */}
            <Accordion.Item eventKey="1">
                <Accordion.Header>Job experience</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                        <Col>
                        <InputGroup className="mb-3"> 
                       
                      
                        </InputGroup>
                        </Col>
                    </Col>
                  </Row>
                
                </Accordion.Body>
              </Accordion.Item>


              {/*Skills */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                        <Col>
                        <InputGroup className="mb-3"> 
                        {skills.map((skill , index) => (    
                        <InputGroup key={index} className="mb-3"> 
                              <Button id={skill} variant="dark" className="bg-danger"  onClick={(e) => removeItem(e.currentTarget.id)}>Remove</Button> 
                              <Form.Control readOnly type='text' value={skill} aria-label="New skills"/> 
                              </InputGroup>
                        ))}
                        <Button variant="dark" className={`dark ${skills.length > 6 || newSkill.length == 0 ? "disabled" : "" }`} onClick={() => addItem()}> Add New +</Button> 
                        <Form.Control type='text' value={newSkill}  onChange={(e)=>setNewSkill(e.target.value)} aria-label="New skills"/> 
                      
                        </InputGroup>
                        <p className={`text-danger ${skills.length > 6 ? "visible": "invisible" }`}>You have reached maximum skills</p>
                        </Col>
                    </Col>
                  </Row>
                
                </Accordion.Body>
              </Accordion.Item>


              {/*Style */}
              <Accordion.Item eventKey="4">
                <Accordion.Header>Style</Accordion.Header>
                <Accordion.Body>

                  <Row className="d-flex justify-content-between">
            
                        <Col md={5}  sm={5}>
                        <Form.Label htmlFor="bgColorInput">Background color </Form.Label>
                        <Form.Control
                            type="Color"
                            id="bgColorInput"
                            defaultValue={bgcolor}
                            value={bgcolor}
                            onChange={(e) => setBgcolor(e.target.value)}
                          />
                        </Col>

                        <Col md={5} sm={5}>
                        <Form.Label htmlFor="colorInput">Text color </Form.Label>
                        <Form.Control
                            type="Color"
                            id="colorInput"
                            defaultValue={color}
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                          />
                        </Col>

  
                  </Row>
                
                </Accordion.Body>
              </Accordion.Item>

          </Accordion>   


     </Col>


 {/*right container */}
     <Col className="p-5">

      <Row className="h-100">
        <Col  className="h-100 shadow">
   {/*Basic Information on top */}
          <Row style={{background:`${bgcolor}`, color: `${color}`}} className="d-flex flex-column  align-items-center pt-5 pb-2 row-cols-1 text-center ">

        {/*full Name  */}
          <Col>
          <h1 className="fs-1 fw-bold">{firstName.charAt(0).toUpperCase()+firstName.slice(1)} {lastName.toUpperCase()}</h1>
          </Col>

          <hr style={{width:"50%"}}/>
        
        {/*location and telephone */}
          <Col>      
            <Row className="text-center d-flex ">
           
              <Col><p> <strong>Location</strong> : {location}</p></Col>

              <Col ><p><strong>Téléphone</strong> : {phone}</p></Col>
            </Row>
          </Col>


        {/*Email & linkedin */}
        <Col>      
            <Row className="text-center d-flex ">
          <Col><p><strong>Email</strong> : {email}</p></Col>

          <Col ><p><strong>Linkedin</strong> : {linkedin}</p></Col>
              </Row>
          </Col>

        
          </Row>
         
   {/*Main content */}
       <Row className="p-3 ">

      {/*Profile */}
        <Row  className=" py-3 ">
          <Col >
          <h4 style={{color : `${bgcolor}`}} className="fs-2 fw-bolder mb-4">Profile</h4>
             <p>{sum}</p>
          </Col>
        </Row>

       {/*Employement history */}
        <Row >
          <Col className="border-top py-3" >
          <h4 style={{color : `${bgcolor}`}} className="fs-2 fw-bolder mb-4">Work experience</h4>
             <ul>
              
              <li>
                <Col>
              <h5>exp 1</h5>
              <time>Date</time>
              <p>Job description</p>
              </Col>
              </li>



             </ul>
          </Col>
        </Row>


        <Row  className="border-top  py-3 mb-4">
        <p style={{color : `${bgcolor}`}} className="fs-2 fw-bolder">Skills</p>

          <Col lg={6} md={6} className="border-end  ">
        
                <Col  lg={12}>
                    <ul className="row row-cols-2 w-100  ">
                      {skills.map((item , index)=>(<Col><li key={index}>{item}</li></Col>))}
                    </ul>
                </Col>



           </Col>
           
        </Row>

        </Row>  


        </Col>
      </Row>
   
     </Col>

      </Row>
    </Container>
    </>
  )
}

export default Generator;