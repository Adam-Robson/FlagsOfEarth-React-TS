export default function Country({
  name,
  flag
}: {
    name: string,
    flag: string
  }) {

  return (
    <div className='country-card'>
      <img src={`${flag}`} alt={`flag of ${name}`} />
    </div>
  )
}
