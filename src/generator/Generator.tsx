
import React  , { useState , createElement} from "react";
import { Container , Col , Row , Accordion, Form ,InputGroup , Button } from "react-bootstrap";
import './generator.scss';
import FormControl from "./form_control/FormControl";
import Work from "./work/Work";
import Major from "./major/Major";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook , faUser, faSuitcase ,faGlobe, faGear } from "@fortawesome/free-solid-svg-icons";



function Generator(){

  const [bgcolor , setBgcolor] = useState<string>("#563d7c");
  const [color , setColor] = useState<string>("#ffffff");


  const [firstName , setfirstName] = useState<string>("");
  const [lastName , setLastname] = useState<string>("");
  const [email , setEmail] = useState<string>("");
  const [linkedin , setLinkedin] = useState<string>("");
  const [phone , setPhone] = useState<any>(undefined);
  const [location , setLocation] = useState<string>("");
  const [sum , setSum] = useState<string>("");

  {/*add Experience */}
  interface Experience {
    title: string;
    date: string; 
    description: string;
  }

  const [exps , setExps]  = useState<Experience[]>([])
  const [newExp , setNewExp] = useState<Experience>({ title: "", date: "", description: "" })

const addExp = (e : any) =>{
  e.preventDefault();
    const form = e.target as HTMLFormElement;
    const newExperience = {
      title: form.title.value.toLowerCase(),
      date: form.date.value,
      description: form.description.value.toLowerCase(),
    };

    setExps([...exps, newExperience]);
    setNewExp({ title: "", date: "", description: "" });
    setRemainingChar(150)
    form.reset();
   }
                                                        
   const removeExp = (index : number) =>{
    setExps(exps.filter((item) => item != exps[index]))
}
   
const [remainingChar , setRemainingChar] = useState<number>(0)

const showRemainingCharacter =  (e:any) =>{

  setRemainingChar(e.target.maxLength - e.target.value.length)
 }




{/*add Major */}
interface Major {
  majorName: string;
  date: string; 
  majorInstitution: string;
}

const [majors , setMajors]  = useState<Major[]>([])
const [newMajor , setNewMajor] = useState<Major>({ majorName: "", date: "", majorInstitution: "" })

const addMajor = (e : any) =>{
e.preventDefault();
  const form = e.target as HTMLFormElement;
  const newMajor = {
    majorName: form.majorName.value.toLowerCase(),
    date: form.date.value,
    majorInstitution: form.majorInstitution.value.toLowerCase(),
  };

  setMajors([...majors, newMajor]);
  setNewMajor({ majorName: "", date: "", majorInstitution: "" });
  form.reset();
 }

                                                      
const removeMajor = (index : number) =>{
    setMajors(majors.filter((item) => item != majors[index]))
}
   




{/*add skills */}

  const [skills , setSkills] = useState<string[]>([])
  const [newSkill , setNewSkill] = useState<string>("")

  const addSkill = () =>{
    ( setSkills([...skills, newSkill]) )
       setNewSkill((""))   
  }

  const removeSkill = (el : string) =>{
    ( setSkills(skills.filter((item) => item != el)) )
  }


{/*add Languages */}

const [languages , setLanguages] = useState<string[]>([])
const [newLanguage, setNewLanguage] = useState<string>("")

const addLanguages = () =>{
  ( setLanguages([...languages, newLanguage]) )
  setNewLanguage((""))   
}

const removeLanguages = (el : string) =>{
  ( setLanguages(languages.filter((item) => item != el)) )
}

  

  return (
    
    <>
    <Container fluid id="generator" >
      <Row className="position-relative d-flex justify-content-end fade-animation">


     {/*left container */}
      <Col lg={5} md={12} className="scrollit top-0 start-0 border shadow py-5 bg-light">
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
                       <FormControl id="Location" value={location} type="text" setValue={setLocation}/>
                      </Col>

                      <Col lg={5} md={12} sm={5} >
                       <FormControl id="Phone Number" value={phone} type="tel" setValue={setPhone}/>
                      </Col>

                       <Col lg={5} md={12} sm={5} >
                       <FormControl id="Email" value={email} type="email" setValue={setEmail}/>
                      </Col>

                      <Col lg={5} md={12} sm={5} >
                       <FormControl id="Linkedin" value={linkedin} type="text" setValue={setLinkedin}/>
                      </Col>


                       <Col lg={12} md={12} sm={12} >

                      <Form.Label htmlFor="summary">Summary </Form.Label>
                      <br/>
                       <Form.Control as="textarea" rows={3}
                          id = "summary"
                          maxLength={200}
                          onChange={(e)=> {setSum(e.target.value) ; showRemainingCharacter(e);}} />
                          <p className="text-danger">{remainingChar}/200 remaining character</p>
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
                       { exps.map((experience , index)=>(
                       <InputGroup key={index} className="mb-3"> 
                              <Button variant="dark" className="bg-danger" onClick={() => removeExp(index)}>Remove</Button> 
                              <Form.Control readOnly type='text' value={ `${experience["title"].length > 20? experience["title"].slice(0,15).padEnd(18,"."): experience["title"]} `} aria-label="New skills"/> 
                        </InputGroup>
                          ))}
                       <Form onSubmit={addExp} >
                          <Form.Group  controlId="formJob">

                          <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" required/>
                              
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" required/>

                            <Form.Label>description</Form.Label>
                            <Form.Control as="textarea" name="description"  maxLength={150} onChange={(e)=>showRemainingCharacter(e)} required/>
                            <p className="text-danger">{remainingChar}/150 remaining character</p>
                            <br />
                            <Button variant="dark" type="submit" className={`${exps.length == 3 ? "disabled" : ""}`} >Add</Button>
                            <p className={`text-danger ${exps.length == 3 ? "visible": "invisible" }`}>You have reached maximum of experience</p>

                          </Form.Group>
                        </Form>
                      </Col>
                    </Col>
                  </Row>
                
                </Accordion.Body>
              </Accordion.Item>

            {/*Education*/}
             <Accordion.Item eventKey="3">
                <Accordion.Header>Education</Accordion.Header>
                <Accordion.Body>
                <Row>
                    <Col>
                       <Col>
                       { majors.map((major , index)=>(
                       <InputGroup key={index} className="mb-3"> 
                              <Button variant="dark" className="bg-danger" onClick={() => removeMajor(index)}>Remove</Button> 
                              <Form.Control readOnly type='text' value={ `${major["majorName"].length > 20? major["majorName"].slice(0,15).padEnd(18,"."): major["majorName"]} `} aria-label="New major"/> 
                        </InputGroup>
                          ))}

                       <Form onSubmit={addMajor} >
                          <Form.Group  controlId="formMajor">

                          <Form.Label>Major Name</Form.Label>
                            <Form.Control type="text" name="majorName" required/>
                              
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" required/>

                            <Form.Label>Major Institution</Form.Label>
                            <Form.Control type="text" name="majorInstitution" required/>
                            <br />
                            <Button variant="dark" type="submit" className={`${majors.length == 3 ? "disabled" : ""}`} >Add</Button>
                            <p className={`text-danger ${majors.length == 3 ? "visible": "invisible" }`}>You have reached maximum of majors</p>


                          </Form.Group>
                        </Form>
                      </Col>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>


              {/*Skills */}
              <Accordion.Item eventKey="4">
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                        <Col>
                        <InputGroup className="mb-3"> 
                        {skills.map((skill , index) => (    
                        <InputGroup key={index} className="mb-3"> 
                              <Button id={skill} variant="dark" className="bg-danger"  onClick={(e) => removeSkill(e.currentTarget.id)}>Remove</Button> 
                              <Form.Control readOnly type='text' value={skill} aria-label="New skills"/> 
                              </InputGroup>
                        ))}
                        <Button variant="dark" className={`dark ${skills.length > 5|| newSkill.length == 0 ? "disabled" : "" }`} onClick={() => addSkill()}> Add New +</Button> 
                        <Form.Control type='text' value={newSkill}  onChange={(e)=>setNewSkill(e.target.value)} aria-label="New skills"/> 
                      
                        </InputGroup>
                        <p className={`text-danger ${skills.length > 5 ? "visible": "invisible" }`}>You have reached maximum skills</p>
                        </Col>
                    </Col>
                  </Row>
                
                </Accordion.Body>
              </Accordion.Item>

               {/*Languages */}
           <Accordion.Item eventKey="5">
                <Accordion.Header>Languages</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                        <Col>
                        <InputGroup className="mb-3"> 
                        {languages.map((language , index) => (    
                        <InputGroup key={index} className="mb-3"> 
                              <Button id={language} variant="dark" className="bg-danger"  onClick={(e) => removeLanguages(e.currentTarget.id)}>Remove</Button> 
                              <Form.Control readOnly type='text' value={language} aria-label="New language"/> 
                              </InputGroup>
                        ))}
                        <Button variant="dark" className={`dark ${languages.length == 3|| newLanguage.length == 0 ? "disabled" : "" }`} onClick={() => addLanguages()}> Add New +</Button> 
                        <Form.Control type='text' value={newLanguage}  onChange={(e)=>setNewLanguage(e.target.value)} aria-label="New Language"/> 
                      
                        </InputGroup>
                        <p className={`text-danger ${languages.length == 3 ? "visible": "invisible" }`}>You have reached maximum of languages</p>
                        </Col>
                    </Col>
                  </Row>
                
                </Accordion.Body>
              </Accordion.Item>
 
              {/*Style */}
              <Accordion.Item eventKey="6">
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
     <Col lg={6}   className="p-5 ">

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
       <Row className="p-4 ">

      {/*Profile */}
        <Row  className="py-3 ">
          <Col >
          <h4 style={{color : `${bgcolor}`}} className="fs-2 fw-bolder  my-4">
          <FontAwesomeIcon icon={ faUser } style={{color: `${bgcolor}`}} className="me-3"/>
            Profile</h4>
            <p >{sum}</p>
     
          </Col>
        </Row>

        {/*Education summary */}
        <Row >
          <Col className="border-top py-3" >
          <h4 style={{color : `${bgcolor}`}} className="fs-2 fw-bolder  my-4">
          <FontAwesomeIcon icon={ faBook } style={{color: `${bgcolor}`}} className="me-3"/>
            Education</h4>
             <ul>
              { majors.map((major , index)=>(
              <Major id={index} majorName={major["majorName"]}  date={major["date"]} majorInstitution={major["majorInstitution"]} />
              ))
            }
             </ul>
          </Col>
        </Row>




       {/*Employement history */}
        <Row >
          <Col className="border-top py-3" >
          <h4 style={{color : `${bgcolor}`}} className="fs-2 fw-bolder  my-4">
          <FontAwesomeIcon icon={faSuitcase} style={{color: `${bgcolor}`}} className="me-3"/>
            Work experience</h4>
             <ul>
              { exps.map((experience , index)=>(
              <Work id={index} title={experience["title"]}  date={experience["date"]} description={experience["description"]} />
              ))
            }
             </ul>
          </Col>
        </Row>

        {/*Skills */}
        <Row  className=" row-cols-2 border-top  py-3 my-4">
          <Col lg={5} md={5} className="border-end  ">
          <p style={{color : `${bgcolor}`}} className="fs-2 fw-bolder">
          <FontAwesomeIcon icon={faGear} style={{color: `${bgcolor}`}} className="me-3" />
            Skills</p>
                <Col  lg={12}>
                    <ul className="row row-cols-2 w-100  ">
                      {skills.map((item , index)=>(<Col><li key={index} className="text-capitalize">{item.toLowerCase()}</li></Col>))}
                    </ul>
                </Col>
           </Col>    

            {/*Language */}

          <Col lg={5} md={5} >
          <p style={{color : `${bgcolor}`}} className="fs-2 fw-bolder ">
          <FontAwesomeIcon icon={faGlobe} style={{color: `${bgcolor}`}}  className="me-3"/>
            Languages</p>
                <Col  lg={12}>
                    <ul className="row row-cols-1 w-100 ">
                      {languages.map((item , index)=>(<Col><li key={index} className="text-capitalize">{item.toLowerCase()}</li></Col>))}
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