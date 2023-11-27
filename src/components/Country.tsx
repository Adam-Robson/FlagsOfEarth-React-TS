import { useState } from 'react'

export default function Country({
  name,
  iso2
}: {
  name: string,
  iso2: string
}) {
  const [showName, setShowName] = useState(false);

  const iso = iso2.toLowerCase();

  function toggleName() {
    setShowName(!showName);
  }

  return (
    <div className='country-card' onClick={toggleName}>
      <img
        className="flag"
        src={`https://flagcdn.com/${iso}.svg`}
        height="44"
        alt={`${name}`}
      />
      <span className={showName ? '' : 'name'}>{name}</span>
    </div>
  )
}
