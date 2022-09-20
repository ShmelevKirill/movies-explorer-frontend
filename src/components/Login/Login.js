import React from 'react'
import AuthForm from '../AuthForm/AuthForm'
export default function Login() {
  return (
    <AuthForm
    formName="loginForm"
    title="Рады видеть!" 
    buttonText="Войти" 
    navText="Ещё не зарегистрированы?" 
    navLinkTo="/signup"
    navLinkText="Регистрация"
   />
  )
}