import { useState } from 'react';
import Footer from '../components/Footer.js';
import Navbar from './Navbar.js';
import Link from 'next/link'


async function getError(res) {
    if (res.headers.get('Content-Type').includes('application/json')) {
      const data = await res.json();
      return data.errors[0];
    }
    return { message: (await res.text()) || res.statusText };
  }
  


export default function QuoteServer(props) {

    const [{ quote, personSelector, dateSuggested, success, delivery, welcome}, setState] = useState({
        quote: '',
        personSelector: '',
        dateSuggested: Date(),
        success: false,
        delivery: false,
        welcome: true,
    })


    const fetchQuote = async e => {
        console.log('here')
        const res = await fetch('/api/SingleQuote')
        console.log('res is', res)
        if (res.ok) {
            const {quote}  = await res.json();
            console.log('data here is', quote)
            return setState({ 
                quote: quote.text, 
                personSelector: quote.author, 
                dateSuggested: quote.date,
                success: true });
          }
        
        //   const error = await getError(res);
        //   setState({ loading: false, success:false, error });
    };

    function order(){
        return setState({ 
            delivery: true,
            welcome:false,
            success: false
            });
    }
  
    return (
        <div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            {success && 
                
                <div>
                <Navbar/> 
                <h1>{quote}</h1> 
                <p>-{personSelector}</p>
                <p>Date recommended: {dateSuggested}</p>
                <br/>
                <p>Would you like to pay it forward for our next guest?</p>
                <button>
                <Link href="/menu">Click Here</Link>
               </button>
                </div>
                 
            }
            { welcome &&
                <div>
                    <br/>
                    <strong><h2 className="heading">Wishing for some soul food?
                    </h2></strong>
                    <h2 className="indexP">Order a quote below!</h2>
                    <br/>
                    <center>
                        <button onClick={order} className="btn btn-primary fetchQuoteBTN">
                         Get a dish here
                        </button> 
                    </center>
                </div>
            }
            {
                delivery &&<div>
                    <img src="../animations/delivery.gif" className="deliveryBoy"></img>
                    <audio control autoplay>
                        <source src="/audio/motorbike.mp3" type="audio/mpeg"/>
                    </audio>
                    <button onClick={fetchQuote} className="btn btn-primary recieveQuoteBTN">
                        Your order has arrived!
                    </button>
                </div>
            }
            <Footer />
        </div>
    )
}