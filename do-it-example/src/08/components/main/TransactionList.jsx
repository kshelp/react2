import React, { PureComponent } from 'react';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

//import axios from 'axios';
import Api from '../../Api';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';
import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    /*
    axios
      .get('http://localhost:4000/transactions')
      .then((response) => this.setState({ transactions: response.data }));
    axios
      .get('http://localhost:4000/transactions', { params: { code: 'BTX' } })
      .then((response) => this.setState({ transactions: response.data }));
    */
    Api.get('/transactions', { params: { code: 'BTX' } })
    .then((response) => this.setState({ transactions: response.data }));
  }

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
        <TransactionPaginationContainer />
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
