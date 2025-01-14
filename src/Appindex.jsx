import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/styleindex.css'

export default function Appindex() {

  const [efect, Setefec] = useState(true)
  //console.log(efect);

  const clickefect = () => {
    //Setefec(true)
    Setefec(false);
    setTimeout(() => {
      ///termina de cargar
      Setefec(true);
    }, 5000);
  }

  return (
    <>


      <div className="mockup-phone border-accent">
        <div className="camera"></div>
        <div className="display">

          <div className="artboard artboard-demo phone-4 place-items-center">

            {
              efect ? (



                <div className="flex w-full flex-col">
                  <div className="card bg-base-800 rounded-box grid h-50 flex-grow place-items-center">


                    <a href="https://vite.dev" target="_blank">
                      <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                      <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>


                    <h1>Vite + React</h1>

                    <p>
                      Test de Servidor Windows 10
                    </p>

                  </div>
                  <div className="divider">By</div>

                  <div className="card bg-base-300 rounded-box grid h-50 flex-grow place-items-center">

                    <p>

                      <button className="btn btn-secondary" onClick={() => clickefect()} >INICIAR</button>

                    </p>
                    <br></br>

                    <p className="read-the-docs">
                      Abraham Velazquez Gonzalez
                    </p>
                  </div>
                </div>



              )
                :
                (
                  <div id="logocontainer">
                    <div id="pelogo">AVG</div>
                    <div className="loader" style={{ left: '2vh', top: '0', height: '2vh', width: '0', animation: 'slide1 1s linear forwards infinite' }}></div>
                    <div className="loader" style={{ right: '0', top: '2vh', width: '2vh', height: '0', animation: 'slide2 1s linear forwards infinite', animationDelay: '0.5s' }}></div>
                    <div className="loader" style={{ right: '2vh', bottom: '0', height: '2vh', width: '0', animation: 'slide3 1s linear forwards infinite' }}></div>
                    <div className="loader" style={{ left: '0', bottom: '2vh', width: '2vh', height: '0', animation: 'slide4 1s linear forwards infinite', animationDelay: '0.5s' }}></div>
                  </div>
                )
            }

          </div>





        </div>
      </div>




    </>
  )
}


