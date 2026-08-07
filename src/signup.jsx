import './authentication.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!username.trim() || !email.trim() || !password.trim() || !confirm.trim()) {
      setError('Please fill out all fields.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    // TODO: wire real signup API here
    // For now, navigate to authentication (sign-in)
    navigate('/authentication')
  }

  return (
    <main id="auth">
      <section className="container" aria-label="Sign up form">
        <div className="container_header">
          <h1 className="header-label1">Sign Up</h1>
          <img src="/Logo.jpeg" className="logo2" alt="Live Weather Monitoring System" />
        </div>

        <form className="container_content" onSubmit={handleSubmit}>
          <div className="field-row">
            <label htmlFor="username" className="field-label">User Name<span className="required">*</span></label>
            <div className="field">
              <img src="/signupprofilepic.png" alt="User icon" className="field-icon user-icon" />
              <input id="username" name="username" type="text" placeholder="Choose a username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
          </div>

          <div className="field-row">
            <label htmlFor="email" className="field-label">Email<span className="required">*</span></label>
            <div className="field">
              <input id="email" name="email" type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
          </div>

          <div className="field-row">
            <label htmlFor="password" className="field-label">Password<span className="required">*</span></label>
            <div className="field">
              <img src="/lock.png" alt="Password icon" className="field-icon lock-icon" />
              <input id="password" name="password" type="password" placeholder="Create a password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
          </div>

          <div className="field-row">
            <label htmlFor="confirm" className="field-label">Confirm<span className="required">*</span></label>
            <div className="field">
              <input id="confirm" name="confirm" type="password" placeholder="Confirm password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
            </div>
          </div>

          {error && <p className="errorMessage">{error}</p>}

          <button type="submit" className="sign-in-button">Create Account</button>

          <p className="signupLine">Already have an account? <button type="button" className="linkButton" onClick={()=>navigate('/authentication')}>Sign In</button></p>
        </form>

        <footer className="container_footer">Copyright © 2026 Weather App. All rights reserved.</footer>
      </section>
    </main>
  )
}
