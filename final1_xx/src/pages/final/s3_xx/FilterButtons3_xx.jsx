import React from 'react'

const FilterButtons3_xx = ({ categories, changeMenuFilter }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => (
        <button
          key={category}
          type='button'
          className='filter-btn'
          onClick={() => changeMenuFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons3_xx
