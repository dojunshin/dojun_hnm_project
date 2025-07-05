import React, { use } from 'react'
import '../Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    
    // 폼 제출 이벤트를 막아줌
    e.preventDefault()

    // 로그인 로직을 여기에 추가
    // 예: 서버에 아이디와 비밀번호를 보내고 응답을 처리
    // console.log('로그인 시도:', id, password)

    if (id === '' || password === '') {
      alert('아이디와 비밀번호를 입력해주세요.')
      return
    } else {
      alert('로그인 성공!')

      // setAuthenticate(true)
      dispatch(authenticateAction.login(id,password))

      //로그인 성공 후 페이지 이동
      navigate('/')

    }


  }

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form className="login-form" onSubmit={(event)=>handleLogin(event)}>
        <input type="text" placeholder="아이디" className="login-input" value={id} onChange={e=> setId(e.target.value)}/>
        <input type="password" placeholder="비밀번호" className="login-input" value={password} onChange={e=> setPassword(e.target.value)}/>
        <button type="submit" className="login-btn">로그인</button>
      </form>
    </div>
  )
}

export default Login