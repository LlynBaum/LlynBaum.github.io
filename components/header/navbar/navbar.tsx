import NavItem from './navitem'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-6'>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/map'>Karte</NavItem>
                <NavItem href='/about'>Über uns</NavItem>
            </ul>
        </nav>
    )
}

export default Navbar;