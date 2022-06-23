import React from 'react'
import './VideoGrid.css'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import { useState } from 'react';

function VideoGrid() {

  const [movie,setMovie]=useState(false)

  var obj=[{title:'master',description:'djcfjdhjw',image:'master.jpg'},{title:'panda',description:'djcfjdhjw',image:'kungfupanda.jpg'},{title:'thor',description:'djcfjdhjw',image:'thor.jpg'},{title:'Evil Dead',description:'djcfjdhjw',image:'evil dead.jpg'},{title:'Raksha',description:'djcfjdhjw',image:'rakshabandhan.jpg'},
  {title:'Harry',description:'djcfjdhjw',image:'harry.jpg'},{title:'Dory',description:'djcfjdhjw',image:'dory.jpg'},{title:'Moon',description:'djcfjdhjw',image:'moon.jpg'}]
  
  const handleclick=(id,itm)=>{
    console.log(id)
    console.log(itm)
   if(id<=7){
    setMovie(true)
   }else{
    return setMovie(false)
   }}
  return (
    
    <div className='row'>
            <h1>Action Movies</h1>
            <div className='posters' >
            {obj.map((itm,k)=>{
                return(<div><img style={{width:'150px',height:'150px',marginRight:'15px'}} src={itm.image}></img>
                <div className='hello'>
                <h1>{itm.title}</h1>
                <p className='desc'>{itm.description}</p>
                <button className='btnplay' onClick={()=>handleclick(k,itm)}>Play</button>
                </div>
                </div>
                 )
                })
  }
                </div>
                {movie?<ShakaPlayer autoPlay src='https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd'/>:''}
                          
            </div>

                
               
  )
}

export default VideoGrid