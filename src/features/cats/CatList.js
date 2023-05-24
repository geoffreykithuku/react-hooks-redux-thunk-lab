// write your CatList component here
import React from 'react'

const CatList = ({catPics}) => {
  return (
      <div>
          {catPics && catPics.map(c => {
              return <img width={100} src={c.url} alt='cat' key={c.id} />
                 
          })}
    </div>
  )
}

export default CatList