// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//let db = require('data/db.json');
let fs = require('fs');
import db from '@/data/db.json'

export default function handler(req, res) {
  const {method,body} = req;
  switch(method){
    case 'GET' : dataGet(); break;
    case 'POST' : datacreate(); break;
    case 'PUT' : dataUpdate(); break;
    case 'DELETE' : dataDelete(); break;
  }

  function dataGet(){ 
    res.status(200).json(db);
  }
  
  function datacreate(){ 
    db.push(body)
    saveData();
  }

  function dataUpdate(){ 
    let user = db.find(obj => obj.id == body.id)
    Object.assign(user,body);

    fs.writeFileSync('data/db.json',JSON.stringify(db));
    saveData();

  }

  function dataDelete(){ 
    console.log(body)
    db = db.filter(db => db.id != body);
    console.log(db)
    saveData();
  }

  function saveData(){ 
    fs.writeFileSync('data/db.json',JSON.stringify(db));
    res.status(200).json(db);
  }

}
