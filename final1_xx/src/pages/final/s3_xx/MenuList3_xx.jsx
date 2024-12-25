import React from 'react'
import MenuItem3_xx from './MenuItem3_xx'
import FilterButtons3_xx from './FilterButtons3_xx'

const MenuList3_xx = ({ menu, categories, changeMenuFilter }) => {
  return (
    <section className='menu-demo'>
      <FilterButtons3_xx
        categories={categories}
        changeMenuFilter={changeMenuFilter}
      />
      <div className='section-center'>
        {menu.map((item) => (
          <MenuItem3_xx key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default MenuList3_xx
