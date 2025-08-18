export default function UnidadSelect({ value, onChange }) {
    const unidades = [
        'Arandas',
        'Chapala',
        'Cocula',
        'El Grullo',
        'La Huerta',
        'Lagos de Moreno',
        'Mascota',
        'Puerto Vallarta',
        'San Juan de los Lagos',
        'TSJ en línea',
        'Tala',
        'Tamazula',
        'Tepatitlán',
        'Tequila',
        'Tomatlán',
        'Zapopan',
        'Zapotlanejo',
    ];

    return (
        <select className="unidad-select" value={value} onChange={onChange}>
            <option value="">Seleccionar unidad académica</option>
            {unidades.map((nombre) => (
                <option key={nombre} value={nombre}>
                    {nombre}
                </option>
            ))}
        </select>
    );
}
