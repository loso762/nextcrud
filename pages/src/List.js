import React, { useEffect,useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router';

function List() {
  const router = useRouter();
  const [data, setData]=useState([]);

  async function getData(){
    let response = await axios.get('/api/hello');
    setData(response.data);
  } 

  function deleteData(id){
    axios.delete('/api/hello', {data:id});
    getData();
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <div>List</div>
      <Link href="/src/Write">글쓰기</Link>
      <ul>
        {
          data?.map( obj =>
              <li key={obj.id}>
                <p>{obj.name} / {obj.tel} / {obj.email}</p>
                <div>
                  <button onClick={()=>router.push({pathname:'/src/Update',query:obj })}>
                    수정
                  </button>
                  <button onClick={()=>deleteData(obj.id)}>삭제</button>
                </div>
              </li>
            )
        }
      </ul>
    </>
  )
}

export default List