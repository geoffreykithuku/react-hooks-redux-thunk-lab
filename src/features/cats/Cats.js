import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const catPics = useSelector((state) => state.entities)
  const dispatch = useDispatch()
  const status = useSelector(state => state.status)
  
  useEffect(()=>{
    dispatch(fetchCats())
  }, [dispatch])

  console.log(catPics)
  return (
    <div>
      <h1>CatBook</h1>
      <p>{status}</p>
      {/* add CatList component here */}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
