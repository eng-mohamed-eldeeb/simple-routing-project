import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useHistory, useLocation } from 'react-router-dom';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search);
  const  isSortingACS = queryParams.get('sort') === 'asc';
  
  const ChangeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingACS? 'des' : 'asc')}`
    })
  }

  const sortedQuotes = sortQuotes(props.quotes, isSortingACS)

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={ChangeSortingHandler}>Sort {isSortingACS? 'Desending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
