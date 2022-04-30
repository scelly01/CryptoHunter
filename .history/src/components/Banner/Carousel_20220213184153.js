import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Container, makeStyles, Typography } from '@material-ui/core'
 import { CryptoState } from '../../CryptoContext';
import {TrendingCoins} from "../../config/api"
import AliceCarousel from 'react-alice-carousel';
import {Route, Switch, Link} from "react-router"
import { Router } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles(() =>({
    carousel:{
        height: "50%",
        display: "flex",
        alignItems: "center"
    }
}));

const Carousel = () => {
  
  const [trending,setTrending] = useState([]);
  const classes = useStyles();
  const {currency} = CryptoState();

  const fetchTrendingCoins = async() =>{
    const {data} = await axios.get(TrendingCoins(currency))
    setTrending(data);}

  console.log(trending);

  useEffect(() =>{
    fetchTrendingCoins();}
    , [currency]
  )

  const items = trending.map((coin) =>{
    return (
      <Link
      className={classes.carouselItem} 
      to={`/coins/${coin.id}`}>
        <img src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
            />
        {/* <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              //color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            </span>
          </span> */}
      
    </Link>
    );
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };


    return (
    <div className={classes.carousel}>
    <AliceCarousel 
      mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
    /> 
    </div>
  )
}

export default Carousel