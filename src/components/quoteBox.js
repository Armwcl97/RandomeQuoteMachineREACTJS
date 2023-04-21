import React from 'react';

function QuoteBox(){
    const [quotes,setQuotes] = React.useState([]);
    const [randomQuotes,setRandomQuotes] = React.useState('');
    const [color, setColor] = React.useState("#fff")

    React.useEffect(()=>{
        async function fetchData(){
          const response = await fetch(`https://type.fit/api/quotes`);
          const data = await response.json();
          setQuotes(data);
          let randIndex = Math.floor(Math.random()*data.length);
          setRandomQuotes(data[randIndex]);
        }
        fetchData();
      },[])

      const getNewQuote =()=>{
        const colors=[
          '#16a085',
          '#27ae60',
          '#2c3e50',
          '#f39c12',
          '#e74c3c',
          '#9b59b6',
          '#FB6964',
          '#342224',
          '#472E32',
          '#BDBB99',
          '#77B1A9',
          '#73A857'
        ]
        let randColorIndex = Math.floor(Math.random()*colors.length)
        let randIndex = Math.floor(Math.random()*quotes.length);
        setRandomQuotes(quotes[randIndex]);
        setColor(colors[randColorIndex])
      }
    return(
        <div id="wrapper">
      <div style={{backgroundColor: color, minHeight:"100vh"}} id="quote-box">
      <div className="container ">
        <div className="jumbotron ">
         <div className='card'>
          <div className='card-header'>Inspirational Quotes</div>
          <div className='card-body'>
            {randomQuotes?(
              <>
                <h5 id="author" className="card-title quote-author">{randomQuotes.author || "No Author"}</h5>
                <p id="text" className="card-text quote-text">"{randomQuotes.text}"</p>
              </>
            ):(
              <h2>Loading</h2>
            )}
            <div class='row'>
              <button onClick={getNewQuote} className="btn btn-primary" id="new-quote">New Quote</button>
              <a id="tweet-quote" href={
                "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+
                encodeURIComponent(
                  '"'+randomQuotes.text+'" - '+randomQuotes.author
                )
              } className="btn" target="_blank" rel="noreferrer">
              Tweet!
              </a>
            </div>
          </div>
         </div> 
        </div>
      </div>  
      </div>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
            </div>
    )
}

export default QuoteBox;