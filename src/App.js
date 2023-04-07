import './App.css';
import qrcode from '../src/images/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <div className="main-box">
        <img className='qrcodeimg' src={qrcode} alt='logo' />
        <div className="title">Improve your front-end skills by building projects</div>
        <div className="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
      </div>
    </div>
  );
}

export default App;
