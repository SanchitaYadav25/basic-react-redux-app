import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './App.css';
import { fetchListData } from './api/index';
type ReduxProps = ConnectedProps<typeof connector>;
type Props = ReduxProps;

const App: React.FC<Props> = (props) => {
  const { userData, fetchListData} = props;
  const { data, error, status} = userData;
  useEffect(() => {
    fetchListData();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {status == "PENDING" && "LOADIN......"}
       {JSON.stringify(data)}
      </header>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  userData : state.userDataList
})

const mapDispatchToProps = {
  fetchListData
}
const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
