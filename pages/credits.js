import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';

export default function Credits() {
  return (
    <div>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 className="creditsH1">Made with ❤️ by</h1>
          <ul className="creditsUl">
              <li className="creditsLiLeft"><a href="https://github.com/Slaeh">Harjit Liyal</a></li>
              <li className="creditsLiRight"><a href="https://github.com/epaez1996">Edward Paez</a></li>
              <li className="creditsLiLeft"><a href="https://github.com/michael0419">Michael Cai</a></li>
              <li className="creditsLiRight"><a href="https://github.com/Thandor-droid">Umadevi Sookhai</a></li>
            </ul>
    <Footer/>
    </div>
  )
}
