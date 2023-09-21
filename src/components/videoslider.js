import ironmanv from '../assets/Iron Man 3 -- Official Trailer UK Marvel _ HD.mp4'
import avatarv from '../assets/Avatar_ The Way of Water _ Official IMAX® Trailer.mp4'
import johnwickv from '../assets/John Wick_ Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård.mp4'
import oppenhimerv from '../assets/Oppenheimer _ Official Trailer.mp4'
import spiderman from '../assets/SPIDER-MAN_ NO WAY HOME - Official Trailer.mp4'
import frontsty from '../styles/frontpg.module.css'
import { useState, useEffect, useRef, useCallback } from 'react'



function Videoslider({parentwidth}) {
    const [currentindex, setindex] = useState(0)
    const videoarray = [ironmanv,avatarv,johnwickv,oppenhimerv,spiderman]
    const [video, setvideo] = useState(videoarray[currentindex])
    const timeRef = useRef(null)
    const [mute, setmute] = useState(true)

  function gotoleft(){
      const isFirstslide = currentindex === 0
      const newindex = isFirstslide? videoarray.length - 1 : currentindex - 1;
      setindex(newindex)
      setvideo(videoarray[currentindex])
    }


  const gotoright = useCallback(() => {
      const isLastslide = currentindex === videoarray.length - 1
      const newindex = isLastslide? 0 : currentindex + 1;
      setindex(newindex)
      setvideo(videoarray[currentindex])
    },[currentindex, videoarray])

    function togglemute() {
      if(mute === true){
        setmute(false)
      }else{
        setmute(true)
      }
    }

    useEffect(() => {
      if(timeRef.current){
        clearTimeout(timeRef.current)
      }
      timeRef.current = setTimeout(() => {
        gotoright()
      }, 30000)

      return () => clearTimeout(timeRef.current)
    }, [gotoright])


    
  return (
    <div>
      <div className={frontsty.sliderbox} onClick={togglemute}>
        <div className={frontsty.leftarrow} onClick={gotoleft}>◄</div>
        <div className={frontsty.rightarrow} onClick={gotoright}>►</div>
        <video className={frontsty.testv} src={video} autoPlay muted={mute}/>
      </div>
    </div>
  )
}

export default Videoslider
