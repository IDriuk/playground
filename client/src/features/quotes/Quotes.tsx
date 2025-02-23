import { useState } from "react"
import styles from "./Quotes.module.css"
import {   
  useGetQuotesQuery,
  useGetQuoteByIdQuery,
  useCreateQuoteMutation,
  useUpdateQuoteMutation,
  useDeleteQuoteMutation
} from "./quotesApiSlice"

const options = [5, 10, 20, 30]

export const Quotes = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState(10)
  const [selectedQuote, setSelectedQuote] = useState(1)

  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetQuotesQuery(numberOfQuotes)
  const { 
    data: selected, 
    isError: selectedError, 
    isLoading: selectedLoading, 
    isSuccess: selectedSuccess 
  } = useGetQuoteByIdQuery(selectedQuote)

  const [createQuote] = useCreateQuoteMutation();
  const [updateQuote] = useUpdateQuoteMutation();
  const [deleteQuote] = useDeleteQuoteMutation();

  const handleCreate = async () => {
    await createQuote({ country: 'some country', country_id: 1, last_update: '' });
  };

  const handleUpdate = async (quote: any) => {
    await updateQuote({ id: quote.country_id});
  };

  const handleDelete = async (id: number) => {
    await deleteQuote(id);
  };


  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <h3>Select the Quantity of Quotes to Fetch:</h3>
        <button onClick={handleCreate}>Add Quote</button>
        <button onClick={() => handleUpdate({country_id: 5})}>Edit</button>
        <button onClick={() => handleDelete(125)}>Delete</button>
        <select
          className={styles.select}
          value={numberOfQuotes}
          onChange={e => {
            setNumberOfQuotes(Number(e.target.value))
          }}
        >
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {data.quotes.map(({ country, last_update, country_id }) => (
          <blockquote key={country_id}>
            &ldquo;{last_update}&rdquo;
            <footer>
              <cite>{country}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    )
  }

  return null
}
