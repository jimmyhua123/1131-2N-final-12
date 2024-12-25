import { useState } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_xx'
import data_menu from './menu_data'
import MenuList3_xx from './MenuList3_xx'

const S3Page_xx = () => {
  const [menu, setMenu] = useState(data_menu)
  const [category, setCategory] = useState('all')

  const categories = ['all', ...new Set(data_menu.map((item) => item.category))]

  const changeMenuFilter = (selectedCategory) => {
    setCategory(selectedCategory)
    if (selectedCategory === 'all') {
      setMenu(data_menu)
    } else {
      const filteredMenu = data_menu.filter(
        (item) => item.category === selectedCategory
      )
      setMenu(filteredMenu)
    }
  }

  return (
    <Wrapper>
      <MenuList3_xx
        menu={menu}
        categories={categories}
        changeMenuFilter={changeMenuFilter}
      />
    </Wrapper>
  )
}

export default S3Page_xx
