import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { useUser } from "../../hooks/UserContext";
import { Link, useNavigate } from "react-router-dom";

import {Button} from "../../components";
import api from "../../services/api";
import LoginImg from "../../assets/login-image.svg"
import Logo from "../../assets/burger.svg"

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Error,
  SignInLink
} from "./styles"




export function Login() {
  const navigate = useNavigate()
  
  const {putUserData,userData} = useUser()
 console.log("Este é o console "+userData);

  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório").min(6, 'Senha deve conter min de 6 caracteres'),
  })


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  

  const onSubmit = async clientData => {

    try {
      const { status,data } = await api.post('session', {
        email: clientData.email,
        password: clientData.password
      }, { validateStatus: () => true })

      if (status === 200 || status === 201) {
        toast.success('Seja bem-vindo(a)')
      } else if (status === 401) {
        toast.warn('Verifique email ou senha')
      } else {
        throw new Error()
      }
      
      putUserData(data)

      setTimeout(()=>{
        if(data.admin){
          navigate('/pedidos')
        }else{
          navigate('/')
        }
       
      },1500)
    
      

    } catch (error) {
      toast.error('Erro no servido! Tente novamente')
    }

  };


  return (
    <Container>
      <LoginImage src={LoginImg} alt="Sanduicher" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label>Email</Label>
          <Input {...register('email')} type="email" err={errors.email?.message} />
          <Error>{errors.email?.message}</Error>

          <Label>Senha</Label>
          <Input {...register('password')} type="password" err={errors.password?.message} />
          <Error>{errors.password?.message}</Error>


          <Button type="submit" style={{ marginTop: 60, marginBottom: 25 }} >Entrar</Button>
        </form>
        <SignInLink>Não possui conta ? <Link style={{color:'white'}} to="/cadastro">Crie uma</Link></SignInLink>

      </ContainerItens>
    </Container>
  )
}

