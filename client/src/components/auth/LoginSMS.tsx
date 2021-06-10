import React, { useState } from 'react'

const LoginSMS = () => {
  const [phone, setPhone] = useState('')

  return (
    <form>
      <div className="form-group mb-3">
        <label htmlFor="phone" className="form-label">Phone number</label>

        <input type="text" className="form-control" id="phone"
        value={phone} onChange={e => setPhone(e.target.value)} />
      </div>

      <button type="submit" className="btn btn-dark w-100"
      disabled={phone ? false : true}>
        Login
      </button>
    </form>
  )
}

export default LoginSMS
