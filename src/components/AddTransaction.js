const AddTransaction = () => {
    return (
        <form>
            <h3>
                Add New Transaction
            </h3>
            <div>
                <label htmlFor='text'>
                    Text
                </label>
                <input type='text' placeholder='Enter text...' id='text'></input>
            </div>
            <div>
                <label htmlFor='amount'>
                    Amount (negative=expense, positive=income) 
                </label>
                <input type='text' placeholder='Enter amount...' id='amount'></input>
            </div>
            <input type='submit' ></input>
        </form>
    )
}

export default AddTransaction
