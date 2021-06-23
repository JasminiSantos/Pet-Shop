import React from 'react';
import Data from './data';
import { marketObjOne,
         marketObjTwo,
         marketObjThree,
         marketObjFour,
         marketObjFive,
         marketObjSix,
         marketObjSeven,
         marketObjEight,
         marketObjNine,
         marketObjTen

} from './data/data';


import { MarketContainer, 
         MarketWrapper,
         MarketH1,
         Icon

} from './marketElements';



const Market = () => {
    return (
        <>
            <MarketContainer>
                <MarketH1>Market Place</MarketH1>
                <MarketWrapper>
                    <Data {...marketObjOne} />
                    <Data {...marketObjTwo} />
                    <Data {...marketObjThree} />
                    <Data {...marketObjFour} />
                    <Data {...marketObjFive} />
                    <Data {...marketObjSix} />
                    <Data {...marketObjSeven} />
                    <Data {...marketObjEight} />
                    <Data {...marketObjNine} />
                    <Data {...marketObjTen} />
                    <Data {...marketObjOne} />
                    <Data {...marketObjTwo} />
                    <Data {...marketObjThree} />
                    <Data {...marketObjFour} />
                    <Data {...marketObjFive} />
                    <Data {...marketObjSix} />
                    <Data {...marketObjSeven} />
                    <Data {...marketObjEight} />
                    <Data {...marketObjNine} />
                    <Data {...marketObjTen} />
                </MarketWrapper>
                <Icon to="/">Voltar</Icon> 
            </MarketContainer>
            
        </>
    )
};

export default Market;