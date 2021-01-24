import { useState } from 'react';
import Link from 'next/link';

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
            <h1> Cards here </h1> 
            <button
                            type="button"
                            onClick={fetchQuotes}
                            >Get Menu!</button>
            {success &&
                <div className="Menu">
                    <div>
                        <p>Card 1</p>
                        <p>{threeQuote.quote0.text}</p>
                        <p>-{threeQuote.quote0.author}</p>
                        <button
                            type="button"
                            onClick={()=>writeQuotes(threeQuote.quote0)}
                            >select</button>
                    </div>
                    <div>
                        <p>Card 2</p>
                        <p>{threeQuote.quote1.text}</p>
                        <p>-{threeQuote.quote1.author}</p>
                        <button
                            type="button"
                            onClick={()=>writeQuotes(threeQuote.quote1)}
                            >select</button>
                    </div>
                    <div>
                        <p>Card 3</p>
                        <p>{threeQuote.quote2.text}</p>
                        <p>-{threeQuote.quote2.author}</p>
                        <button
                            type="button"
                            onClick={()=>writeQuotes(threeQuote.quote2)}
                            >select</button>
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
                    <a onClick={reset}> try again here</a>
                </div>

            }
            {
                completion &&
                <div>
                    Thank you for giving back to the community!
                </div>
            }
        </div>
          
            
        
      </>
    );
  }