import React from 'react';
import LoginContainer from './Components/login/LoginContainer';
import { Routes, Route } from 'react-router-dom';
import Dash from './Components/dashboard/DashBoard';
import { useSelector } from 'react-redux';
import Header from './Components/dashboard/Header';
import BrokerTable from './Components/Tables/Brokers/BrokerTable';
import Event from './Components/Tables/EventTable/Event';
import DeliveryList from './Components/Tables/Delivery/DeliveryTable';
import PermissionTable from './Components/Tables/Permission/PermissionTable';
// import PurchaseTable from './Components/Tables/Purchase Journal/PurchaseJournalTable';
import PurchaseJournalTable from './Components/Tables/Purchasejournal new/Purchase2Table';


function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className='App'>
      {auth.currentUser ?
        (
          <Header>
            <Routes>
              <Route path="/" element={<Dash />} />
              <Route path="/brokers" element={<BrokerTable />} />
              <Route path="/event" element={<Event />} />
              <Route path="/delivery" element={<DeliveryList />} />
              <Route path="/permissions" element={<PermissionTable />} />
              <Route path="/purchase" element={<PurchaseJournalTable />} />


            </Routes>
          </Header>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<LoginContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </>
        )}
    </div>
  );
}

export default App;