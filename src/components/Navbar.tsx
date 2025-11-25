import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'


const Navbar = () => {
  return (
    <nav>
      {/* left side navbar */}
      <div>
        <img src='../../public/images/logo.svg' />
        <p className="font-bold">Zal's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* right side navbar */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className='icon-hover' />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar