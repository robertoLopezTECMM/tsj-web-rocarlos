import MapJalisco from '../../components/jaliscoMap';
import { BasicContainer } from '../../components/basicContainer';
import './index.css';
import InfoCards from '../../components/infoCards';

export const Presentacion = () => {
  return (
    <BasicContainer>
      <div className="presentacion-wrapper">
        <div className="cards-left">
          <InfoCards side="left" />
        </div>

        <div className="mapaPresentacion">
          <MapJalisco />
        </div>

        <div className="cards-right">
          <InfoCards side="right" />
        </div>
      </div>
    </BasicContainer>
  );
};
