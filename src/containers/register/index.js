import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { Link } from "react-router-dom";

import {Button} from "../../components";
import api from "../../services/api";
import LoginImg from "../../assets/registercapa.svg"
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
import { toast } from "react-toastify";



export function Register() {

    const schema = yup.object().shape({
        name: yup.string().required("Nome é obrigatório"),
        email: yup.string().email('Digite um e-mail válido').required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(6, 'Senha deve conter min de 6 caracteres'),
        confirmPassword: yup.string().required().oneOf([yup.ref('password')], "As senhas devem ser iguais")
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async clientData => {

        try {
            const { status } = await api.post('users', {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password
            }, { validateStatus: () => true })

            if (status === 201 || status === 200) {
                toast.success('Cadastro criado com sucesso')
            } else if (status === 409) {
                console.log(status);
                toast.error('Email já cadastrado')
            } else {
                throw new Error()
            }

        } catch (error) {
            toast.error("Falha no sistema! Tente novamente")
        }




    };



    return (
        <Container>
            <LoginImage src={LoginImg} alt="Sanduicher" />
            <ContainerItens>
                <img src={Logo} alt="logo" />
                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label err={errors.name?.message} >Nome</Label>
                    <Input {...register('name')} type="text" err={errors.name?.message} />
                    <Error>{errors.name?.message}</Error>

                    <Label err={errors.email?.message} >Email</Label>
                    <Input {...register('email')} type="email" err={errors.email?.message} />
                    <Error>{errors.email?.message}</Error>

                    <Label err={errors.password?.message} >Senha</Label>
                    <Input {...register('password')} type="password" err={errors.password?.message} />
                    <Error>{errors.password?.message}</Error>

                    <Label err={errors.confirmPassword?.message}>Confirmar Senha</Label>
                    <Input {...register('confirmPassword')} type="password" err={errors.confirmPassword?.message} />
                    <Error>{errors.confirmPassword?.message}</Error>


                    <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }} >Cadastra</Button>
                </form>
                <SignInLink>Já possui uma conta ? <Link style={{color:'white'}} to="/login">Entrar</Link></SignInLink>

            </ContainerItens>
        </Container>
    )
}

