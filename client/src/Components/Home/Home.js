import './Home.css';
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom';
import ButtonMisc from '../ButtonMisc/ButtonMisc'
import Sell from '../Sell/Sell';
import Buy from '../Buy/Buy'
function Home() {
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  // const classes = useStyles();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);
  // const buybtn=()=>{
  //   <Buy/>
  // }
  return (
    <div className="App">
      <div className='home'>
        <div className='home-text'>
          <h2 className='home-text-h2'>Get Affordable Furniture<br></br> For Your Home!</h2>
          <ButtonMisc btntext={"Sell"}/>
          {/* <button onClick={<Buy/>}>Buy</button> */}
          <ButtonMisc btntext={"Buy"}/>
          {/* <button onClick={<Buy setCurrentId={setCurrentId} />}>Buy</button> */}
        </div>
        
      </div>
    </div>
  );
}

export default Home;
