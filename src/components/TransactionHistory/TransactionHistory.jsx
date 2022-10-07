import PropTypes from "prop-types";
import { Table, Head, TableTitle, TableItem } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    
    return (
        <Table>
            <Head>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </Head>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionItem key={id}
                        typeItem={type}
                        amount={amount}
                        currency={currency}
                    />)
                )}
            </tbody>
        </Table>
    )
};

const TransactionItem = ({ typeItem, amount, currency }) => {
    return (
        <TableItem>
            <td>{typeItem}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </TableItem>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
};

TransactionItem.propTypes = {
    typeItem: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
