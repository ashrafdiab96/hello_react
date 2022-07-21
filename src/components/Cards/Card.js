import React, { Fragment } from 'react'
import CaedData from '../CardData/CardData';
import './Card.css';


const card = () => {

  const boys = [
    {
      id: 1,
      name: "Ashraf",
      phone: "01020869595",
      age: 25,
      job: "Software Engineer",
      'address': "Cairo, Egypt",
    },
    {
      id: 4,
      name: "Ali",
      phone: "00237417754",
      age: 32,
      job: "Civil Engineer",
      'address': "Giza, Egypt",
    },
  ];

  const girls = [
    {
      id: 2,
      name: "Menna",
      phone: "00960165051361",
      age: 24,
      job: "AI Engineer",
      'address': "Toronto, Canada",
    },
    {
      id: 3,
      name: "Jasmeen",
      phone: "01009120160",
      age: 23,
      job: "Content Creator",
      'address': "Alexanderia, Egypt",
    },
  ];

  return (
    <Fragment>
      <div className='mainContainer'>
        <h1>Boys</h1>
        <CaedData dataList={boys} type="m" />
        <h1>Girls</h1>
        <CaedData dataList={girls} type="f" />
      </div>
    </Fragment>
  )
}

export default card;
