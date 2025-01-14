
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import Appindex from '../Appindex';
//import Cookies from 'js-cookie';
//import Protector_ from './protector';


export default function Navigateroute() {

    ///animar con transiones de paginas
    const location = useLocation()


    return (
    
            <Routes location={location} key={location.pathname}>
                {/* rutas libres */}
                <Route path="/" index element={<Appindex></Appindex>} />
                <Route path="/inicio" index element={<Navbar></Navbar>} />
                <Route path="/ini3" index element={<Navbar></Navbar>} />
                <Route path="/ini2" index element={<Home />} />
                <Route path="/404" element={<NotFound />} />

             


                {/* comodin para dar por defecto la pagina que no sirve */}
                <Route path="*" element={<NotFound />} />

            </Routes>
  

    );
}

function Boxes() {
    return <>asd</>
}

function Navbar() {
    // visible on every page
    return <> <h1>NAVEGACION DE RUTAS  TEST SERVER VITE YARN</h1></>
}

function Home() {
    return (
        <>
            <p>SISTEMA DE NAVEGACION DE RUTAS ABRAHAM PARA SISTEMAS</p>
            <ul>
                <li><Link to='/regixpress'> Inicio </Link></li>
                <li><Link to='/json'>ejemplo de json</Link></li>
                <li><Link to='/inicio'>Sistema Catastral de Dictamenes</Link></li>
            </ul>
        </>);
}

function About() {
    return (
        <>
            <p>ACERCA DE</p>
            <ul>
                PAGINAS PROTEGIDAS VERSION NATIVA QUE DETALLE
            </ul>
        </>);
}


function NotFound() {
    return (<><p>Ha llegado a una página que no existe :| </p></>);
}