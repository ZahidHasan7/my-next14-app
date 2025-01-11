import { dologin } from '@/app/actions'
import React from 'react'

const Login = () => {
  return (
    <div>login

        <form action={dologin}>
            <button className="bg-black text-white p-1  margin-top: 20px text-lg" type='submit' name='action' value="google" >
                sign in with google
            </button>
        </form>
    </div>


  )
}

export default Login