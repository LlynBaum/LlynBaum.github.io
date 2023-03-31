import Link from 'next/link'
import NavItem from './navitem'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-6'>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/categories'>Categories</NavItem>
                <NavItem href='/map'>Map</NavItem>
                <NavItem href='/about'>About</NavItem>
            </ul>
        </nav>
    )
}

export default Navbar;