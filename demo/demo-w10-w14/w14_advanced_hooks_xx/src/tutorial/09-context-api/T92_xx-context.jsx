import { useState, createContext, useContext } from 'react'

import { data } from '../../data'
import T92_xx from './T92_xx-context-api'

const PersonContext = createContext()

export const PersonContextProvider_xx = ({ children }) => {
  const [people, setPeople] = useState(data)
  console.log('data', data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      {children}
    </PersonContext.Provider>
  )
}

export const usePersonContext = () => {
  return useContext(PersonContext)
}
