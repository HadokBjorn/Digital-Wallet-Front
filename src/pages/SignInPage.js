import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useRef } from "react";
import axios from "axios";

export default function SignInPage() {
  const form = {email:"", password:""}
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const buttonClick = () =>{
    form.email = emailRef.current.value;
    form.password = passwordRef.current.value;
  }

  const request = () =>{
    const url = `https://digitalwallet-api.onrender.com/login`;
    axios.post(url, form)
    .then((res)=>{
      localStorage.setItem("token",res.data)
      navigate("/home")
    })
    .catch((err)=>alert(err.response.data))
  }

  const login = (e) =>{
    e.preventDefault();
    buttonClick();
    request();
  }
  
  return (
    <SingInContainer>
      <form onSubmit={login}>
        <MyWalletLogo />
        <input placeholder="E-mail" type="email" ref={emailRef}/>
        <input placeholder="Senha" type="password" ref={passwordRef}
        autocomplete="new-password" />
        <button type="submit" >Entrar</button>
      </form>

      <Link>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
