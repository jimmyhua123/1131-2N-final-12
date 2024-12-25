import { useState, useEffect } from 'react'
import MenuItem_xx from '../../components/mid_xx/MenuItem_xx'

import { supabase } from '../../db/clientSupabase'

import Wrapper from '../../assets/wrappers/Menu_xx'

const P3Page_xx = () => {
  const [menu, setMenu] = useState([])
  const fetchMenuFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from('menu_xx').select('*')
      console.log('supabase menu', data)
      setMenu(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuFromSupabase()
  }, [])

  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>Supabase: Hsingtai, 123456789</h2>
              <div className='underline'></div>
            </div>
            <div className='btn-container'>
              <button type='button' className='filter-btn' data-id='all'>
                all
              </button>
              <button type='button' className='filter-btn' data-id='breakfast'>
                breakfast
              </button>
              <button type='button' className='filter-btn' data-id='lunch'>
                lunch
              </button>
              <button type='button' className='filter-btn' data-id='dessert'>
                dessert
              </button>
              <button type='button' className='filter-btn' data-id='shakes'>
                shakes
              </button>
            </div>
            <div className='section-center'>
              {menu?.map((item) => {
                const { id, img, title, price, category, descrip } = item
                return (
                  <MenuItem_xx
                    key={id}
                    id={id}
                    img={img}
                    title={title}
                    category={category}
                    price={price}
                    descrip={descrip}
                  />
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  )
}
export default P3Page_xx
