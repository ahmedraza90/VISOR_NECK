import './style.css';
import helmet from './images/FullImage.png'
import logo from './images/LOGO.png'
import twitter from './images/twitter.png'
// import './styl.css';




function App() {

  return (
    <div>
      <center>
        <h2 className='text-color'>
          MOWS,&nbsp;&nbsp;&nbsp;inc .
        </h2>
      </center>
      <center>
        <div className="Logo">
          <img src={logo} alt="" />
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
            <img src={helmet} alt="" />
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
          <p className='text-color'>
            ALL RIGHTS RESERVED
          </p>
        </div>
      </center>
    </div>
  );
}

export default App;
