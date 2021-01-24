import Head from 'next/head'
import QuoteServer from '../components/QuoteServer'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';



export default function Home() {
  return (
    <div>

      <body>
        
      <div id="page-container">
      
      <div className="index_content">
        <div className="lcurtain curtainLeft1"></div>
        <div className="lcurtain curtainLeft2"></div>
        <div className="lcurtain curtainLeft3"></div>
        <div className="rcurtain curtainRight3"></div>
        <div className="rcurtain curtainRight2"></div>
        <div className="rcurtain curtainRight1"></div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
        <h1 className="h1Heading">
          <span className="text-wrapper">
            <span className="letters">Food For Thought</span>
          </span>
        </h1>
        <div className= "indexInnerContent">
            <QuoteServer/>
        </div>
        <br/>
        <br/>
        
        </div>
    
      </div>
      <br/>
       
    </body>
    
    </div>
  )
}
