import './style.css';
import helmet from './images/FullImage.png'
import helmet2 from './images/Helmet.svg'
import logo from './images/LOGO.png'
import twitter from './images/TWITTER.svg'
// import './styl.css';




function App() {

  return (
    <div>
      <center>
        <h2 className='text-color'>
          MOWS,inc.
        </h2>
      </center>
      <center>
        <div >
        {/* <div class="cyclone"></div> */}
          <img className="Logo" src={logo} alt="" />
          {/* <img className='logo_op' src={logo} alt="" /> */}
        </div>
      </center>
      <center>
        <h1 className="Heading">
          A PARADIGM SHIFT BEGINS
        </h1>
      </center>
      <div>
        <center>
          <div className="helmet">
          <div className='center'></div>
            <img src={helmet} alt="" />
            <img className='center_p' src={helmet2} alt="" />
          </div>
        </center>
      </div>
      <center>
        <div style={{marginBlock:"50px"}}>
          <p className='text-color'>
            AN NFT COMPANY
          </p>
          <p className='p_text'>
            WITH FIVE YEARS OF EXPERIENCE
          </p>
          <p className='p_text'>
            LANUCHING FREE MINTS FOR TWITTER MFERS
          </p>
        </div>
      <center>
        <div style={{ marginBlock:"10px", marginTop:"20px" }} onClick={() =>
                  window.open('https://twitter.com/oasisx_world', '_blank')
                }>
            < img src={twitter} alt="" style={{ height: "30px", width:"30px" }}></img>
        </div>
      </center>
      </center>
      <center>
        <div style={{marginBlock:"30px"}}>
          <p className='text-color small'>
            ALL RIGHTS RESERVED 2023 .
          </p>
        </div>
      </center>
    </div>
  );
}

export default App;
