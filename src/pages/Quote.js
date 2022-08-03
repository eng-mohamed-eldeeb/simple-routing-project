import { Link, useParams, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments.js";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http.js";
import { getSingleQuote } from "../lib/api.js";
import LoadingSpinner from "../components/UI/LoadingSpinner.js";
import { useEffect } from "react";

const Quote = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadingQuotes,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>
  }
  
  if (!loadingQuotes.text) {
    return <h1>NO QUOTE FOUND</h1>;
  }
  return (
    <>
      <HighlightedQuote text={loadingQuotes.text} author={loadingQuotes.author} />
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
