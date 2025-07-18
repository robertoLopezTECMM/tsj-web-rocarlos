import './CategoriaFilterButton.css';

const colorMap = {
    'Licenciatura': 'verde',
    'Maestría': 'rosado',
    'Ingenierías': 'naranja',
    'En línea': 'gris'
};

export default function CategoriaFilterButton({ icon, label, active, onClick }) {
    const colorClase = colorMap[label];

    return (
        <button
            className={`filter-btn ${colorClase} ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
        </button>
    );
}
