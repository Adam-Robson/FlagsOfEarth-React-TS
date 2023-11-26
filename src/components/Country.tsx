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
        src={`https://flagcdn.com/${iso}.svg`}
        width="85"
        alt={`${name}`}
      />
      <span className={showName ? '' : 'name'}>{name}</span>
    </div>
  )
}
