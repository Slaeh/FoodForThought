import { useState } from 'react';
import Link from 'next/link';
import Footer from './Footer.js'

async function getError(res) {
    if (res.headers.get('Content-Type').includes('application/json')) {
      const data = await res.json();
      return data.errors[0];
    }
    return { message: (await res.text()) || res.statusText };
  }

export default function MenuServer() {
    const [{ loading, error, success, completion, threeQuote}, setState] = useState({  loading: false, success: false, completion: false });
    
    function reset(){
        setState({  loading: false, success: false, completion: false});
    }

    const fetchQuotes = async e => {
      e.preventDefault();
      setState({loading: true });
      const res = await fetch('/api/threeRandomQuotes');
      if (res.ok) {
        const quotes = await res.json();
        return setState({  loading: false, success: true ,threeQuote: quotes});
      }
      const error = await getError(res);
      setState({loading: false, error });
      console.log(threeQuote);
    };

    const writeQuotes = async e => {
        //e.preventDefault();
        setState({loading: true });
        const res = await fetch(`/api/writeQuote`,{
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },    
            body: JSON.stringify(e),
        });
        if (res.ok) {
          const { msg } = await res.json();
          return setState({  loading: false, success: false , completion: true});
        }
        const error = await getError(res);
        setState({loading: false, error });
    };

    return (
      <>
        <div> 
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <h1> Cards here </h1> 
            <button
                type="button"
                onClick={fetchQuotes}
                >Get Menu!</button>
            {success &&
                <div className="Menu">
                    <div className="card" style={{width: "400px"}}>
                        
                        <img 
                            className="card-img-top" 
                            src="/images/img1.jpg" 
                            alt="Card image" 
                            style={{width: "100%", maxHeight: "300px"}}/>
                        <div className="card-body">
                            <p className="card-text">{threeQuote.quote0.text}</p>
                        </div>
                        <p>-{threeQuote.quote0.author}</p>
                        <button
                            type="button"
                            onClick={()=>writeQuotes(threeQuote.quote0)}
                            className="btn btn-primary btn-lg"
                            >Select</button>
                    </div>
                    <div className="card" style={{width: "400px"}}>
                        
                        <img 
                            className="card-img-top" 
                            src="/images/img2.jpg" 
                            alt="Card image" 
                            style={{width: "100%"}}/>
                         <div className="card-body">
                            <p className="card-text">{threeQuote.quote1.text}</p>
                        </div>
                        <p>-{threeQuote.quote1.author}</p>
                        <button
                            href="/"
                            onClick={()=>writeQuotes(threeQuote.quote1)}
                            className="btn btn-primary btn-lg"
                            >Select</button>
                            
                    </div>
                    <div className="card" style={{width: "400px"}}>
                        
                        <img 
                            className="card-img-top" 
                            src="/images/img3.jpg" 
                            alt="Card image" 
                            style={{width: "100%"}}/>
                        <div className="card-body">
                            <p className="card-text">{threeQuote.quote2.text}</p>
                        </div>
                        <p>-{threeQuote.quote2.author}</p>
                        <button
                            type="button"
                            onClick={()=>writeQuotes(threeQuote.quote2)}
                            className="btn btn-primary btn-lg"
                            >Select</button>
                    </div>
                </div>
            }
            {
                loading &&
                <div className="Menu">
                    <div>
                        <p>Card 1</p>
                        <p>Loading</p>
                    </div>
                    <div>
                        <p>Card 2</p>
                        <p>Loading</p>
                    </div>
                    <div>
                        <p>Card 3</p>
                        <p>Loading</p>
                    </div>
                </div>
            }
            {
                error && 
                <div>
                    Something has gone wrong: {error.message}
                    <a onClick={reset}> Try again here</a>
                </div>

            }
            {
                completion &&
                <div>
                    <p style={{borderRadius: "15px",fontWeight: "bold",fontSize: "20px",margin: "20px",border: "black solid 1px", padding: "40px"}}>Thank you for giving back to the community!</p>
                    <Link href="/"><button className="btn btn-primary btn-lg">Home Page</button></Link>
                </div>
            }
        </div>
          
            
        <Footer />
      </>
      
    );
  }