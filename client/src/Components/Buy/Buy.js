import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FurnCard from './FurnCard';
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import './Buy.css';
// import {
//   Button,
//   CircularProgress,
//   Container,
//   FormControl,
//   FormControlLabel,
//   Grid,
//   makeStyles,
//   Paper,
//   Radio,
//   RadioGroup,
//   Slider,
//   TextField,
//   Typography,
// } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     marginTop: 20,
//   },
//   loader: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   paper: {
//     marginBottom: "1rem",
//     padding: "13px",
//   },
//   filters: {
//     padding: "0 1.5rem",
//   },
//   priceRangeInputs: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
// });

function Buy() {  
  //const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  // const [filter, setFilter] = useState("");
  // const [sliderMax, setSliderMax] = useState(1000);
  // const [priceRange, setPriceRange] = useState([25, 75]);

  const getData = () =>{
    fetch('http://localhost:5000/api')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res)
      })
  };
  useEffect(() => {
    getData()
  }, [])
  
  // const onSliderCommitHandler = (e, newValue) => {
  //   buildRangeFilter(newValue);
  // };
  // const buildRangeFilter = (newValue) => {
  //   const urlFilter = `?price[gte]=${newValue[0]}&price[lte]=${newValue[1]}`;

  //   setFilter(urlFilter);

  //   //history.push(urlFilter);
  // };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
};
  return (
    <div className='buy-main'>
       <div onClick={() => navigate(-1)} className="backicon">
                    <FiArrowLeft/>
                </div>
        <h1 className='buy-h1'>Buy furniture for your home! </h1>
          <input type="text" 
                className='searchbar'
                placeholder='Search for furniture'
                onChange={(e) => searchItems(e.target.value)}/>
            {/* <div className={classes.filters}>
              <Slider
                min={0}
                max={sliderMax}
                value={priceRange}
                valueLabelDisplay="auto"
                // disabled={loading}
                onChange={(e, newValue) => setPriceRange(newValue)}
                onChangeCommitted={onSliderCommitHandler}
              />
              </div> */}
        <div className='buy-list'>
        {searchInput.length > 1 ? (
                    filteredResults.map((item,i) => {
                        return <FurnCard item={item} key={i} />
                    })
                ) : (
                    data.map((item,i) => {
                        return <FurnCard item={item} key={i} />
                    })
                )}
       
        </div>
    </div>
  );
};

export default Buy;
