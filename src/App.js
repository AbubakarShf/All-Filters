import React, { useEffect, useState } from "react"
import Card from "./components/Card.jsx"

const App = () => {
  const [Books, setBooks] = useState([
    {
      id: 1,
      title: "Crack Coding Interviews-JAVA",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis",
      price:120,
      rating:1
    },
    {
      id: 2,
      title: "Crack Coding Interviews-JavaScript",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis",
      price:60,
      rating:5
    },
    {
      id: 3,
      title: "Crack Coding Interviews-C++",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis",
      price:100,
      rating:3
    },
    {
      id: 4,
      title: "Crack Coding Interviews-Python",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis",
      price:18,
      rating:4
    },
    {
      id: 5,
      title: "Crack Coding Interviews-Go",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis",
      price:50,
      rating:2
    },
  ])
  const [selected,setSelected]=useState('RATING')
  const [searchedBook,setSearchedBook]=useState('')

  const filterData=()=>{

    switch(selected){
      case 'RATING':
        const RatedBooks=Books.sort((a, b) => (+a.rating > +b.rating ? -1 : 1));
        setBooks([...RatedBooks])
        break
        case 'ASCENDING':
          const AsecBooks=Books.sort((a, b) => (+a.price > +b.price ? -1 : 1));
          setBooks([...AsecBooks])
          break
          case 'DESCENDING':
            const DescBooks=Books.sort((a, b) => (+a.price < +b.price ? -1 : 1));
            setBooks([...DescBooks])
        break
        default:
          return null
    }
  }
//   const searchFilter=()=>{
//     if(searchedBook!=''){
//       const searchedBooks = Books.filter(
//         (book) =>
//           book.title.toLowerCase().includes(searchedBook.toLowerCase()) ||
//           book.description.toLowerCase().includes(searchedBook.toLowerCase())
//       );
//       setBooks(searchedBooks);
//     }
//     else{
//     setBooks(Books);

//   }
// }
useEffect(()=>{
filterData()
// searchFilter()
},[selected])
  return (
    <>
      <div className='container'>
        <div className='filterData'>
          <div className='filters'>
            <label htmlFor='filter'>Select Filters</label>
            <select onChange={(e)=>setSelected(e.target.value)} name='filter' id='filter' >
              <option value='RATING' defaultChecked>
                Rating
              </option>
              <option value='ASCENDING'>Price(Ascending)</option>
              <option value='DESCENDING'>Price(Descending)</option>
            </select>
          </div>
          {/* <div className='searchFilter'>
            <label htmlFor='search-filter'>Search Book</label>
            <input
            onChange={(e)=>setSearchedBook(e.target.value)}
              type='search'
              name='search-filter'
              id='search-filter'
              placeholder='Search Books'
            />
          </div> */}
        </div>
        <div className='inner-container'>
          {Books.map((book) => {
            return <Card key={book.id} {...book} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
