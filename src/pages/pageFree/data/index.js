import React, {useState} from 'react';
import Modal from '../../../components/Navbar/modal';


import { DataH2,
         DataP,
         DataCard,
         DataIcon,
         DataIconLink

} from './dataElements';


const Data = ({id,preco,title,image}) => {

    const[modal, setModal] = useState(false)
    const[tempData, setTempData] = useState([])

    const getData = (image, title, preco) => {
        let tempData = [image, title, preco]; 
        setTempData(item => [1, ...tempData])
        return setModal(true)
    }


    return (
        <>
            <DataCard id={id}>
                <DataIconLink onClick={() => getData(image, title, preco)}>
                    <DataIcon src={image} />
                    <DataH2>{title}</DataH2>
                    <DataP >{preco}</DataP>
                </DataIconLink >
            </DataCard >
            {
                modal === true? <Modal image={tempData[1]} title={tempData[2]} preco={tempData[3]} hide={() => setModal(false)}  /> : ''
            }

            
        </>
    )
};

export default Data;