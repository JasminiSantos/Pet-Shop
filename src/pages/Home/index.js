import React from 'react'
import Navbar from '../../components/Navbar';
import backgroundVideo from './video/backgroundVideo.mp4';
import Typewriter from 'typewriter-effect';

import { HomeContainer,
         HomeVideoBg,
         HomeText

} from './homeElements';


const Home = () => {
        return (
            <>
                <Navbar/>
                <HomeText>
                    <Typewriter 
                        onInit= {( typewriter ) => {    
                        typewriter.typeString("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper quis lectus nulla at. Scelerisque fermentum dui faucibus in ornare quam viverra orci.").start(); 
                    }}/>
                </HomeText>   
                <HomeContainer>
                    <HomeVideoBg autoPlay loop muted src={backgroundVideo} type='video/mp4'/>
                </HomeContainer>
                
            </>
        )
};

export default Home

