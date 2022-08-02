import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments.js";
import HighlightedQuote from './../components/quotes/HighlightedQuote';
const DD = [
  {
    id: "q1",
    auther: "eldeeb",
    text: "learining react is fun",
  },
  {
    id: "q2",
    auther: "eldeeb",
    text: "learining react is fuck",
  },
];
const Quote = () => {
  const params = useParams();
  const q = DD.find(quote => quote.id === params.quoteId)
  if(!q) {
    return <h1>NO QUOTE FOUND</h1>
  }
  return (
    <>
      <HighlightedQuote text={q.text} auther={q.auther} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
