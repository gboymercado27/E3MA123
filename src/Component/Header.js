import Logo from '../Logos.JPG'
const Header = ({title}) => {
    return (
        <header>
            <span className="title">{title}</span>
            <img className="logo" src={Logo} alt="Lyceum Logo"/>

        </header>
    )
}

export default Header