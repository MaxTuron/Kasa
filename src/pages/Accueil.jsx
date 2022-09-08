import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Location from "../components/Locations"

export default function App() {
  return (
    <body>
      <div>
        <Banner />
        <Location />
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}