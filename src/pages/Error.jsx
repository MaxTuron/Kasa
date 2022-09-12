import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import "../styles/error.css"
export default function Error() {
    return (
        <div>
            <header>
                <Banner />
            </header>
            <main className="errorPage">
                <div>
                    <p className="code404">404</p>
                    <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <div>
                    <Link className="indexRedirect" to="/">Retourner sur la page d'accueil</Link>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
