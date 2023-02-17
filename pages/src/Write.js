import axios from 'axios';
import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';


const initial ={id:"",name:"", email:"",tel:""}
function Write() {
  const router = useRouter();
  const [inputValue,setValue] = useState(initial);

  function valueChange(e){
    let t = e.target;
    setValue(
      {...inputValue, [t.name]:e.target.value}
    )
  }

  function create(e){
    e.preventDefault();
    axios.post('/api/hello',{...inputValue,id:Date.now()})
    router.push('/');
  }

  return (
    <div>
      <form onSubmit={create}>
        <p><input onChange={valueChange} type="text" placeholder='이름' name='name'/></p>
        <p><input onChange={valueChange}  type="email" placeholder='메일' name='email'/></p>
        <p><input onChange={valueChange}  type="tel" placeholder='연락처' name='tel'/></p>
        <p><input type="submit" value='저장'/></p>
      </form>
    </div>
  )
}

export default Write