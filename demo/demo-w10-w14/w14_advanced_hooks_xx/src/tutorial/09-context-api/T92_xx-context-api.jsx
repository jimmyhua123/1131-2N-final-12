import { usePersonContext, PersonContextProvider_xx } from './T92_xx-context'

const T92_xx = () => {
  return (
    <PersonContextProvider_xx>
      <h3>Context API -- 123456789</h3>
      <List />
    </PersonContextProvider_xx>
  )
}

const List = () => {
  const { people } = usePersonContext()
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = usePersonContext()
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default T92_xx
