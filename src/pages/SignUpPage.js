import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useRef, useState } from "react"
import axios from "axios"

export default function SignUpPage() {
  const form = {name: "", email:"", password:""}
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const doublePasswordRef = useRef("")
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)


  const buttonClick = () =>{
    form.name = nameRef.current.value;
    form.email = emailRef.current.value;
    if(passwordRef.current.value === doublePasswordRef.current.value){
      form.password = passwordRef.current.value;
    }else{
      alert("Senha e confirmação de senha devem ser iguais!")
    }
    console.log(form)
  }

  const request = () =>{
    const url = "https://digitalwallet-api.onrender.com/cadastro";
    axios.post(url, form)
      .then((res)=>{
        console.log(res)
        setLoading(false)
        navigate("/")
      })
      .catch((err)=>alert(err.response.data))
  }

  const register = (e) =>{
    e.preventDefault();
    setLoading(true)
    buttonClick();
    request();
  }
  if(loading){
    return(
      <SingUpContainer className="center">
        <span className="loader"></span>
      </SingUpContainer>
    )
  }
  return (
    <SingUpContainer>
      <form onSubmit={register}>
        <MyWalletLogo />
        <input placeholder="Nome" type="text" ref={nameRef} />
        <input placeholder="E-mail" type="email" ref={emailRef} />
        <input placeholder="Senha" type="password" autoComplete="new-password" ref={passwordRef}/>
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" ref={doublePasswordRef}/>
        <button type="submit">Cadastrar</button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
