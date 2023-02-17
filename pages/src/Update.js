import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';



function Update() {
  const router = useRouter();
  const {query} = router;

  const initial = {
    id : query.id,
    name : query.name,
    email : query.email,
    tel : query.tel
  }
  const [inputValue,setValue] = useState(initial);

  function valueChange(e){
    let t = e.target;
    setValue({...inputValue, [t.name]:e.target.value})
  }

  function create(e){
    e.preventDefault();
    axios.put('/api/hello',{...inputValue,id : query.id})
    router.push('/');
  }

  return (
    <form onSubmit={create}>
      <p><input value={inputValue.name} onChange={valueChange} type="text" placeholder='이름' name='name'/></p>
      <p><input value={inputValue.email} onChange={valueChange}  type="email" placeholder='메일' name='email'/></p>
      <p><input value={inputValue.tel} onChange={valueChange}  type="tel" placeholder='연락처' name='tel'/></p>
      <p><input type="submit" value='저장'/></p>
    </form>
  )
}

export default Update