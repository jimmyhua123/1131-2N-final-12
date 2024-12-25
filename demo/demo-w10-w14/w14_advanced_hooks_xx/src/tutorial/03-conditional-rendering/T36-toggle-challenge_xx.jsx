import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </>
  )
}

const Alert = () => {
  return <div className='alert alert-success'>Hsingtai Chung, 123456789</div>
}

export default ToggleChallenge
