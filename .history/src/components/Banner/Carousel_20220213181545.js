import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Container, makeStyles, Typography } from '@material-ui/core'
 import { CryptoState } from '../../CryptoContext';
import {TrendingCoins} from "../../config/api"
import AliceCarousel from 'react-alice-carousel';

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
    return (
    <div className={classes.carousel}>
    <AliceCarousel />
    </div>
  )
}

export default Carousel