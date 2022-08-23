import React from 'react'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    // ServicesIcon, 
    ServicesH2, 
    ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH1>
            Our Services
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH2>Massage</ServicesH2>
                <ServicesP>These are the services we offer</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>Massage 2</ServicesH2>
                <ServicesP>These are the services we offer</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>Massage 3</ServicesH2>
                <ServicesP>These are the services we offer</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services