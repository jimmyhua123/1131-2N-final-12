import SingleItem_xx from './SingleItem_xx'

const Items_xx = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem_xx
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        )
      })}
    </div>
  )
}
export default Items_xx
