import transaction from "../transactions.json"



export const TransactionList = () => {
    return (
        <div className="section">
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
                <tbody>
                    {transaction.map((el) => (
                        <tr>
                            <td>{el.type}</td>
                            <td>{el.amount}</td>
                            <td>{el.currency}</td>
                        </tr>))}

</tbody>
        
                </table>
        </div>
    )
}