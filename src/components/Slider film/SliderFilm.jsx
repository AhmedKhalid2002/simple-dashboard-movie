import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import media from '../../assets/media.png'

export default function SliderFilm() {
    let [film,setFilm]=useState([]);

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots:false,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    async function getFilm(){
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=786dd41327696b54d43bb94176e7e3d9`);
        setFilm(data.results);
        console.log(data.results);
    }
    useEffect(()=>{
        getFilm()
    },[])
  return (
    <div className="container ">
        <Slider {...settings}>
            {film?.map((films)=><div className='col-md-3 ' key={films.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${films.backdrop_path}`} alt={films.original_title} />
                <div className='d-flex justify-content-between align-items-center m-2 shadow '>
                    <p className='text-white m-2'>{films.original_title}</p>
                    <img src={media} alt="media"  />
                </div>
            </div>)}
        </Slider>
    </div>
  )
}
