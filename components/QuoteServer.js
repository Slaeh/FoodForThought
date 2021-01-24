import { useState } from 'react';

async function getError(res) {
    if (res.headers.get('Content-Type').includes('application/json')) {
      const data = await res.json();
      return data.errors[0];
    }
    return { message: (await res.text()) || res.statusText };
  }
  


export default function QuoteServer(props) {

    const [{ quote, personSelector, dateSuggested, success }, setState] = useState({
        quote: '',
        personSelector: '',
        dateSuggested: Date(),
        success: false,
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

    
    return (
        <div>
            <button onClick={fetchQuote}>
                Click
            </button> 
            {success ? <div> 
                <h1>{quote}</h1> 
                <p>{personSelector}</p>
                <p>{dateSuggested}</p></div>:null}
        </div>
    )
}