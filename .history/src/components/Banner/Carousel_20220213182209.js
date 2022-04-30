import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Container, makeStyles, Typography } from '@material-ui/core'
 import { CryptoState } from '../../CryptoContext';
import {TrendingCoins} from "../../config/api"
import AliceCarousel from 'react-alice-carousel';
import {Link} from "react-router-dom"

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
    <Link className={classes.carouselItem} to={`/coins/${coin.id}`}
    </Link>
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