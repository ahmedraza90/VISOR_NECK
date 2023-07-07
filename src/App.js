import './style.css';
import helmet from './images/FullImage.png'
import logo from './images/LOGO.png'
// import './styl.css';




function App() {

  return (
    <div>
      {/* <center>
          <h2>
            MOWS,&nbsp;&nbsp;&nbsp;inc .
          </h2>
        </center>
        <center>
        <div className="Logo">
          <img src={logo} alt="" />
        </div>
        </center> */}
      <div className="parent">
        <center>
          <div className="helmet">
            <img src={helmet} alt="" />
          </div>
        </center>

        

        {/* <div className="helmet">
          <img src={helmet} alt="" />
        </div>
        <div className="logoText">
          <center>
            MOWS,&nbsp;&nbsp;&nbsp;inc .
          </center>
        </div>
        <div className="Logo">
          <img src={logo} alt="" />
        </div>
        <div className="Heading">
          A PARADIGM SHIFT BEGINS
        </div>
        <div className='lines'>
          <div className='box1'>
            helmet
          </div>
          <div className='box2'>
            visor
          </div>
          <div className='box3'>
            neck
          </div>
        </div>
        <div className='bottomText'>
          <div className="text1">
            An NFT Company
          </div>
          <div className="text2">
            WITH FIVE YEARS OF EXPERIENCE
          </div>
          <div className="text3">
            LANUCHING FREE MINTS FOR TWITTER MFERS
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
