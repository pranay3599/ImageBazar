import React,{useState} from "react";
import ImmazeSearch from "./components/ImmazeSearch";
import ImageList from "./components/ImageList";

const App=()=> {
  const [images ,setImages]=useState([]);
  return (
    
    <div>
       <ImmazeSearch setImages={setImages}></ImmazeSearch>
      <ImageList images={images}></ImageList>
    </div>
  );
}

export default App;
