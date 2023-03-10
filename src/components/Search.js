import React  from 'react'
//This is for Search function
const Search = ({search,setInput}) => {
  const inputHandler=(e)=>{
    setInput(e.target.value);

  }
  return (
    <div className='search'>
        <input type="text" onChange={inputHandler} />
        <button onClick={search} >Search</button>
    </div>
  )
}

export default Search