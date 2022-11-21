const CounterComponent = ({ count, setCount }) => {
	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		if(count === 0) {
			alert('Count cannot be less than 0')
			return
		}
		setCount(count - 1)
	}
	const goBackToZero = () => {
		setCount(0)
	}
	return (
    <>
      Count: {count}
      <br />
      <br />
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      {count > 10 && <button onClick={goBackToZero}>Go back to 0</button>}
    </>
  );
}

export default CounterComponent