import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DD} />;
};

export default AllQuotes;
