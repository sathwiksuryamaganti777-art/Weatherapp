import './authentication.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Authentication() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.')
      return
    }
    // placeholder: replace with real auth
    navigate('/')
  }

  return (
    <main id="auth">
      <section className="container" aria-label="Login form">
        <div className="container_header">
          <h1 className="header-label1">Login</h1>
          <img src="/Logo.jpeg" className="logo2" alt="Live Weather Monitoring System" />
        </div>

        <form className="container_content" onSubmit={handleSubmit}>
          <div className="field-row">
            <label htmlFor="username" className="field-label">
              User Name<span className="required">*</span>
            </label>
            <div className="field">
              <img src="/signupprofilepic.png" alt="User icon" className="field-icon user-icon" />
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
              />
            </div>
          </div>

          <div className="field-row">
            <label htmlFor="password" className="field-label">
              Password<span className="required">*</span>
            </label>
            <div className="field">
              <img src="/lock.png" alt="Password icon" className="field-icon lock-icon" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>
          </div>

          <div className="action-row">
            <button
              type="button"
              className="forgot-password"
              onClick={() => setError('Forgot password flow not implemented yet')}
            >
              Forgot Password?
            </button>
          </div>

          {error && <p className="errorMessage">{error}</p>}

          <button type="submit" className="sign-in-button">
            Let Me In
          </button>

          <p className="signupLine">
            Don't have an account?{' '}
            <button type="button" className="linkButton" onClick={() => navigate('/')}>Sign Up</button>
          </p>
        </form>

        <footer className="container_footer">Copyright © 2026 Weather App. All rights reserved.</footer>
      </section>
    </main>
  )
}