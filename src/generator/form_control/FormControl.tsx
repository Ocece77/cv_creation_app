import React from "react";
import { Form } from "react-bootstrap";

interface FormControlProp{
  id : string,
  value : string,
  type : string,
  setValue : (value : string) => void; 
}

function FormControl({id , value, type, setValue} : FormControlProp){
  return (
<>
<label htmlFor={id}>{id} </label>
     <br/>
        <Form.Control type={type}
        value={value}
        id = {id}
        onChange={(e)=> setValue(e.target.value)} />
      </>
  )
}

export default FormControl;