import React, { useEffect } from 'react'

import { HTTP } from 'utils'

import { useInput, useFetch } from 'utils/hooks'
import { TabProps } from 'components/TabContainer/Tab'

import './Login.scss'
import { TabContainer } from 'components/TabContainer/TabContainer'
import { useUserApi } from 'utils/api'

export function LoginTab() {
  const loginInput = useInput('')
  const passwordInput = useInput('')

  const [login, response, err] = useUserApi.login()

  function onLogin() {
    if (!loginInput.value || !passwordInput.value) {
      return
    }

    console.log('Login creds: ', loginInput.value, passwordInput.value)
  }

  function onLoginHook() {
    login({
      email: loginInput.value,
      password: passwordInput.value,
    })
  }

  return (
    <div className="Login">
      <div className="formGrid">
        <div>email</div>
        <input type='email' {...loginInput} />
        <div>password</div>
        <input type='password' {...passwordInput} />
      </div>
      <button onClick={onLoginHook}>Login</button>
    </div>
  )
}

export function RegisterTab() {
  const emailInput = useInput()
  const nameInput = useInput()
  const passwordInput = useInput()
  const repeatPasswordInput = useInput()

  const [register, response, error] = useUserApi.register()

  const validateInputs = () => {
    const inputsNotEmpty =
      emailInput.value &&
      nameInput.value &&
      passwordInput.value &&
      repeatPasswordInput.value

    const passwordsAreSame = passwordInput.value === repeatPasswordInput.value

    return inputsNotEmpty && passwordsAreSame
  }

  const onRegister = () => {
    if (!validateInputs()) {
      return
    }

    register({
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      repeatPassword: repeatPasswordInput.value,
    })
  }

  return (
    <div className="Register">
      <div className="formGrid">
        <div>email</div>
        <input {...emailInput} />
        <div>name</div>
        <input {...nameInput} />
        <div>password</div>
        <input {...passwordInput} />
        <div>repeat password</div>
        <input {...repeatPasswordInput} />
        <button onClick={onRegister}>Зарегистрироваться</button>
        <div>Req status: {response.status}</div>
      </div>
    </div>
  )
}

export function Login() {
  const tabs: TabProps[] = [
    {
      label: 'Вход',
      key: 'login',
      component: <LoginTab />,
    },
    {
      label: 'Регистрация',
      key: 'register',
      component: <RegisterTab />,
    },
  ]

  return <TabContainer tabs={tabs} />
}
