import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function navbar({ children, home }) {
    return (
      <div >
        <Head>
        
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Nasa Mockup</title>
        <link rel = "icon" href = "../images/favicon.png"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet"/>
    
        </Head>
        <main>
        <div id="page-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link href="/">
                      <a className="nav-link active" aria-current="page">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about">
                      <a className="nav-link">About Us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/credits">
                      <a className="nav-link">Credits</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>

          {children}
        </div>
        <footer className="social-footer">
          <div className="row">
            <div className="column">
              {/* <a href="https://github.com/Slaeh/CunyHackMockp" target="_blank"><img src="/images/github.svg" className="logo"/></a> */}
            </div>
            <div className="column">
              {/* < a href="https://devpost.com/" target="_blank"><img src="/images/devpost-ar21.svg" className="logo" /></a> */}
            </div>
          </div>
        </footer>
        </main>

        
      </div>
    )
  }