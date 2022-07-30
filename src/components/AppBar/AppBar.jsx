import Navigation from "components/Navigation/Navigation"
import css from './AppBar.module.css'

const AppBar = () => {
    return (
        <header className={css.header}>
            <Navigation></Navigation>
        </header>
    )
}

export default AppBar;