import React from 'react'
import AuthForm from '../AuthForm/AuthForm'

export default function Register() {
  return (
    <AuthForm
     formName="registerForm"
     title="Добро пожаловать!" 
     buttonText="Зарегистрироваться" 
     navText="Уже зарегистрированы?" 
     navLinkTo="/signin"
     navLinkText="Войти"
    />
  )
}