import './styles.css'

export function Search({handleChange}){
  return (
    <div className='input-container'>
      <input onChange={handleChange} className='input-search' type="search" placeholder="Pesquise a postagem..." />
    </div>
  )
}