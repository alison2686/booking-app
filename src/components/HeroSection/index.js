import React, { useState } from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    ImgBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements'
import Image from '../../images/candle.jpg'
import { Button } from '../ButtonElement'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <ImgBg src={Image} />
        </HeroBg>
        <HeroContent>
            <HeroH1>Welcome to the App</HeroH1>
            <HeroP>
                Take a look around
            </HeroP>
            <HeroBtnWrapper>
                <Button
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}                        
                >
                    Book an Appointment {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection