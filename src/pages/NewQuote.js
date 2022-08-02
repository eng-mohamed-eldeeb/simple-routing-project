import QuoteForm from './../components/quotes/QuoteForm';
import {useHistory} from 'react-router-dom'
const NewQuote = () => {
    const history = useHistory()
    const NewQuoteHandler = Q => {
        console.log(Q)
        //HTTP
        history.push('/quotes')
    }
    return <QuoteForm onAddQuote={NewQuoteHandler}/>;

}

export default NewQuote;