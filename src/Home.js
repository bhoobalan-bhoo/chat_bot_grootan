import React from "react";
import {QRCodeCanvas} from 'qrcode.react';  //importing component from QR library
import "./App.css";
// const Pool = require('pg').Pool
// const pool = new Pool({
// 	user: 'chan',
// 	host: 'dpg-cfuc26arrk0c831npb1g-a.oregon-postgres.render.com',
// 	database: 'bank_det',
// 	password: 'l3AK61KAp0yrosaj2CFvDaiayUYkWTTD',
// 	port: 5432,
//   })


function Home() {

  const result = 'https://chat-bot-grootan.onrender.com/'.concat(Math.random().toString(36));
  // var kk = pool.query('SELECT * FROM bank_branches where branch ILIKE $1 ORDER BY ifsc ASC LIMIT $2 OFFSET $3',[q, limit,offset]);
  return (
    <div className="App">
    <header className="App-header">
      <p> Link: {result}</p>
      <p> or Scan QR </p>

      <QRCodeCanvas value={result} />
    </header>
  </div>
    );
}

export default Home;