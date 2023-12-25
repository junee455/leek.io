import React, { useEffect } from 'react'

import { HTTP } from 'utils'

import './Login.scss'

export function Login() {
  useEffect(() => {
    HTTP.testFetch()
      .then((res) => res.text())
      .then((t) => console.log(t))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="Login">
      <div>Login</div>
      <div className="formGrid">
        <div>email</div>
        <input />
        <div>password</div>
        <input />
      </div>
      <button>Login</button>
    </div>
  )
}
