
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import IndexPage from './Pages/IndexPage/IndexPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
        <Route path="/account/:subpage/:action" element={<AccountPage />} />
        <Route path="/rooms/:subpage" element={<RoomPage />} />
        <Route path="/book/stays/:subpage?" element={<BookingPage />} />
        <Route path="/payment/success?" element={<PaymentSuccess />} />
        <Route path="/booking/:subpage" element={<BookingConfirmation />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
