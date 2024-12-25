import { useState } from 'react'

const UserChallenge = () => {
  const [user, SetUser] = useState(null)

  const login = () => {
    SetUser({ name: 'htchung' })
  }

  const logout = () => {
    SetUser(null)
  }

  return (
    <>
      {user ? (
        <>
          <h4>hello, {user.name}</h4>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <div>
          <h4>please login</h4>
          <button className='btn' onClick={login}>
            login
          </button>
        </div>
      )}
    </>
  )
}

export default UserChallenge
