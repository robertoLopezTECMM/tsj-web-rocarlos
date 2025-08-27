import { useNavigate } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import './styles/CarreraCard.css';

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export default function CarreraCard({ nombre, foto, type }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/ofertaEducativa/${slugify(nombre)}`);


  return(
    <div className='carrera-newCard' onClick={handleClick}>
      <img src={foto} alt={nombre} className="carrera-newCard-img" />
      <div style={{backgroundColor: type==='LICENCIATURA' ? 'var(--green)': type==='INGENIERÍA' ? 'var(--orange)': 'var(--red)'}} className='carrera-newCard-title'>
        <p>{nombre}</p>
      </div>
    </div>
  )

  // return (
  //   <div className="carrera-card" onClick={handleClick}>
  //     <img src={foto} alt={nombre} className="carrera-img" />
  //     <div className="carrera-overlay">
  //       <FaArrowRight className="carrera-icon" />
  //     </div>
  //     <div className="carrera-nombre">{nombre}</div>
  //   </div>
  // );

  // return(
  //   <Col className= {classname === '1st' ? 'cols-1stRow-news white'  : 'cols-2ndRow-news white'} xs={xs} md={md}>
  //     <a target='_blank' href={url}>
  //       <div className='div-shadowBox'>
  //         {title}
  //       </div>

  //       <div className='div-itemTitleIcon'>
  //         <Newspaper fontSize='large' style={{color:'var(--navyBlue)'}}/>
  //       </div>
  //       <img className='imgClass ' src={image}/>
  //     </a>
  //   </Col>
  // )
}
