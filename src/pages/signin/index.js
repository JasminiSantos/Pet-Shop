import React, {useRef, useState} from 'react';
import { useHistory } from 'react-router';

import { 
    FormContent, 
    FormWrap,
    FormContainer,
    FormLabel,
    FormInput,
    FormButton,
    FormH1,
    Form,
    Icon,
    Alert

} from './signInElements';

const URL_LOGIN = "http://localhost/php/login.php";

const sendData = async (url, data) => {
    
const answer = await fetch ( url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    });
    const json = await answer.json();
    return json;
}


export default function SignIn() {
    let history = useHistory();
    const [wait, setWait] = useState(false);
    const [alert, setAlert] = useState(true);

    const userName = useRef(null);
    const userPassword= useRef(null);



    const HandleLogin = async() => {
        setWait(true);

        const data = {
            "name": userName.current.value,
            "password": userPassword.current.value
        };
        const answerJson = await sendData(URL_LOGIN, data);
        
        const AbletoConnect = () =>{
            history.push('/$2y$10$9X8pPTBkA4Ss6E1SH3GEMOt5Z98WtLD27aMn8CNw1rK');
        }

        answerJson.connected ? AbletoConnect() : setAlert(false);

        setWait(false);
    };

        return (
            <>
                <FormContainer>
                    <FormWrap>
                        <Icon to="/">Home</Icon>
                        <FormContent>
                            <Form >
                                <FormH1>Sign In</FormH1>
                                <FormLabel >📋  First Name</FormLabel>
                                <FormInput type="text" ref={userName} placeholder="First name"/>
                                <FormLabel >🔐 Password</FormLabel>
                                <FormInput type="password" ref={userPassword} placeholder="Password"/>
                                <FormButton type="submit" onClick={HandleLogin} disabled={wait} >Submit</FormButton>
                                <Alert hidden={alert}  >invalid input</Alert>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </FormContainer>
            </>
   );
}