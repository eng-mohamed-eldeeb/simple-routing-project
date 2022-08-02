import { Link, useParams, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments.js";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
const DD = [
  {
    id: "q1",
    author: "eldeeb",
    text: "learining react is fun",
  },
  {
    id: "q2",
    author: "eldeeb",
    text: "learining react is fuck",
  },
];
const Quote = () => {
  const match = useRouteMatch();
  const params = useParams();
  const q = DD.find((quote) => quote.id === params.quoteId);
  if (!q) {
    return <h1>NO QUOTE FOUND</h1>;
  }
  return (
    <>
      <HighlightedQuote text={q.text} author={q.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
