import React, {useState, useRef} from 'react';
import { userSchema } from '../../components/Navbar/Validation/registerValidation';
import Navbar from '../../components/Navbar';
import { RegisterPageContainer,
         ResgisterPageWrap,
         RegisterPageContent,
         RegisterForm,
         RegisterFormH1,
         RegisterFormLabel,
         RegisterFormInput,
         RegisterSubmit,
         RegistrationConfirmed

} from './signupElements';


const URL_RESGISTER = "http://localhost/php/registration.php";

const sendData  =  async (url, data) => {
    
    const answer = await fetch ( url, {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const json = await answer.json();
        return json;
    }
    
    

export default function RegisterPage() {

    const[registered, setRegistered] = useState(false);
    const [wait, setWait] = useState(false)

    const userName = useRef(null);
    const userPassword= useRef(null);
    const userEmail= useRef(null);
    const userPet= useRef(null);
    const userBreed= useRef(null);

    const HandleLogin = async() => {
        setWait(true)


        const data =  {
            "name": userName.current.value,
            "password": userPassword.current.value,
            "email": userEmail.current.value,
            "pet": userPet.current.value,
            "breed": userBreed.current.value

        };

        const isValid = await userSchema.isValid(data);


        if (isValid === true){

            const answerJson = await sendData(URL_RESGISTER, data);

            if (answerJson.result === 'email_already_present') {
                alert('Usuario Ja cadastrado!')
            } else if (answerJson.result === 'true') {
                setRegistered(true)
            }
        } else{
            alert('Verifique o preenchimento de todos os campos')
        }

        setWait(false)

    };

    return (
        <>
        <Navbar/>
        <RegisterPageContainer>
            
            <ResgisterPageWrap>
                <RegisterPageContent>
                    <RegisterForm>
                        <RegisterFormH1>Registration</RegisterFormH1>
                            
                            <RegisterFormLabel >📋First Name</RegisterFormLabel>
                                <RegisterFormInput required type="text" ref={userName} placeholder="Enter your first name"/>
                            <RegisterFormLabel>🔐Password</RegisterFormLabel>
                                <RegisterFormInput required type="password"  ref={userPassword} placeholder="Enter a password" />
                            <RegisterFormLabel>📧Email</RegisterFormLabel>
                                <RegisterFormInput required type="text" ref={userEmail} placeholder="Enter your email"/>
                            <RegisterFormLabel>🐾Pet</RegisterFormLabel>
                                <RegisterFormInput required type="text" ref={userPet} placeholder="Enter which is your pet"/>
                            <RegisterFormLabel>🐶Raca</RegisterFormLabel>
                                <RegisterFormInput required type="text" ref={userBreed} placeholder="Enter its breed"/>
                        <RegisterSubmit registered={registered} disabled={wait} onClick={HandleLogin}>Submit</RegisterSubmit>
                        <RegistrationConfirmed registered={registered} >Registered!</RegistrationConfirmed>
                    </RegisterForm>
                </RegisterPageContent>
            </ResgisterPageWrap>
        </RegisterPageContainer>
        </>
    )

}
