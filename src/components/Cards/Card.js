import React, { Fragment, useState } from 'react'
import CaedData from '../CardData/CardData';
import './Card.css';


const Card = () => {

  const [state, setState] = useState([
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
    {
      id: 6,
      name: "Akram",
      phone: "01009120160",
      age: 45,
      job: "Dentist",
      'address': ", Egypt",
    },
  ]);

  const deleteData = (event, index) => {
    // const deleteItem = state.filter((el, idx) => idx !== index);
    // setState(deleteItem);
    // console.log(state);
    setState((prevState) => {
      return prevState.filter((event, idx) => idx !== index);
    });
  }

  // const girls = [
  //   {
  //     id: 2,
  //     name: "Menna",
  //     phone: "00960165051361",
  //     age: 24,
  //     job: "AI Engineer",
  //     'address': "Toronto, Canada",
  //   },
  //   {
  //     id: 3,
  //     name: "Jasmeen",
  //     phone: "01009120160",
  //     age: 23,
  //     job: "Content Creator",
  //     'address': "Alexanderia, Egypt",
  //   },
  // ];

  return (
    <Fragment>
      <div className='mainContainer'>
        <h1>Boys</h1>
        <button className='btn'>Show Names</button>
        <CaedData dataList={state} type="m" deleteData={deleteData} />
        {/* <h1>Girls</h1>
        <CaedData dataList={girls} type="f" /> */}
      </div>
    </Fragment>
  )
}

export default Card;
