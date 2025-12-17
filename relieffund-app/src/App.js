import './App.css';
import DonationForm from './pages/DonationForm';

function App() {
  return (
    <>
      <div className="App-header">
        <h1> Contribution to PM's Relief Fund </h1>
        <p> Amount Collected: Rs. 1000000 </p>
      </div>
      
      <div>
        <DonationForm />
      </div>
    </>
  );
}

export default App;
