import '../styles/footer.css';
import Logo from '../assets/logoBlack.png'

export default function Banner() {
    return (
      <div className="footer">
        <img src={Logo} alt='Logo noir Kasa' className='logoBlanc'></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    );
  }