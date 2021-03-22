import { useEffect } from "react";
import { api } from "../../Services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <td>Energy Bill</td>
          <td className="withdraw">-$47.00</td>
          <td>Utilities</td>
          <td>20/02/2021</td>
        </tbody>
        <tbody>
          <td>Software Development</td>
          <td className="deposit">$12,247.00</td>
          <td>IT</td>
          <td>20/02/2021</td>
        </tbody>
        <tbody>
          <td>Rent</td>
          <td className="withdraw">-$2,080.00</td>
          <td>Utilities</td>
          <td>10/01/2021</td>
        </tbody>
        <tbody>
          <td>Uber</td>
          <td className="withdraw">-$7.00</td>
          <td>Trasnport</td>
          <td>20/02/2021</td>
        </tbody>
      </table>
    </Container>
  );
}
