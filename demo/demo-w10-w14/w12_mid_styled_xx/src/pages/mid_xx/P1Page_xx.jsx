import Wrapper from '../../assets/wrappers/Menu_xx'

const P1Page_xx = () => {
  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='title'>
              <h2>Midterm_xx: Hsingtai, 123456789</h2>
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
              <article className='menu-item'>
                <img
                  src='/mid_xx/item-7.jpeg'
                  alt='big'
                  salad=''
                  className='photo'
                />
                <div className='item-info'>
                  <header>
                    <h4>7-bacon overflow</h4>
                    <h4 className='price'>8.99</h4>
                  </header>
                  <p className='item-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolores ut iusto quas quia dignissimos ullam. Enim
                    voluptas, expedita architecto, cupiditate molestias quisquam
                    error quam blanditiis tempore quo dicta. Ipsa.
                  </p>
                </div>
              </article>

              <article className='menu-item'>
                <img
                  src='/mid_xx/item-8.jpeg'
                  alt='fried'
                  dish=''
                  className='photo'
                />
                <div className='item-info'>
                  <header>
                    <h4>8-american classic</h4>
                    <h4 className='price'>12.99</h4>
                  </header>
                  <p className='item-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolores ut iusto quas quia dignissimos ullam. Enim
                    voluptas, expedita architecto, cupiditate molestias quisquam
                    error quam blanditiis tempore quo dicta. Ipsa.
                  </p>
                </div>
              </article>

              <article className='menu-item'>
                <img
                  src='/mid_xx/item-9.jpeg'
                  alt='buttermilk'
                  pancakes=''
                  className='photo'
                />
                <div className='item-info'>
                  <header>
                    <h4>9-Quarantine Buddy</h4>
                    <h4 className='price'>13.99</h4>
                  </header>
                  <p className='item-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolores ut iusto quas quia dignissimos ullam. Enim
                    voluptas, expedita architecto, cupiditate molestias quisquam
                    error quam blanditiis tempore quo dicta. Ipsa.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  )
}
export default P1Page_xx
