import quote from "inspirational-quotes";


function Quote() {
  let quoteText = quote.getQuote();
  console.log(quoteText);
return <div className="quote">
<h2>Today's Inspiration</h2>
<p>{quoteText.text}</p>
<p>– <em>{quoteText.author}</em></p>
</div>
}

export default Quote;
