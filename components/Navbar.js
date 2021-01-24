import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function navbar({ children, home }) {
    return (
      <div >
        <Head>
        
        <title>Food For Thought</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="/foodforthought/styles/main.css"/>
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
        <link rel = "icon" href = "/foodforthought/animations/thoughtBubble.png"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Yusei+Magic&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Source+Sans+Pro&display=swap" rel="stylesheet"/>
        <link href="../styles/main.css" rel = "stylesheet"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    
        </Head>
        <main>
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
          <div className="container">
              <a className="navbar-brand" href="#">FoodForThought</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar1">
                  <ul className="navbar-nav nav nav-fill w-100">
                      <li className="nav-item">
                          <Link href="/"><a className="nav-link active">Home</a></Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/about"><a className="nav-link" >About</a></Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/credits"><a className="nav-link">Credits</a></Link>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
        </main>
        
      </div>
    )
  }