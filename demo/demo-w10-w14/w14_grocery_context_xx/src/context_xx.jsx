import { useState, createContext, useContext } from 'react'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
  return list
}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const AppContext_xx = createContext()

export const AppContextProvider_xx = ({ children }) => {
  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item added to the list')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.warning('item deleted')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <AppContext_xx.Provider
      value={{
        items,
        addItem,
        removeItem,
        editItem,
      }}
    >
      {children}
    </AppContext_xx.Provider>
  )
}

export const useAppContext_xx = () => {
  return useContext(AppContext_xx)
}
