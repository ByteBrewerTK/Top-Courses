import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {

  const [coursesData, setCoursesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [contentClass, setContentClass] = useState("loader");
  


  const getData = async ()=>{
      setLoading(true);
      setContentClass("loader")
      try{
        const res = await fetch(apiUrl);
        const resDate =  await res.json();
        setCoursesData(resDate.data);
      }catch(error){
        toast.error(`Something wents wrong`);
      }
      setContentClass("course");
      setLoading(false);
    }
    
    useEffect(()=>{ 
      getData();
    },[])




  return (
    <section className="App">

      <Navbar/>

      <div className="content-area">
        <Filter
        filterData = {filterData}
        category = {category}
        setCategory = {setCategory}/>

        <div className={`content ${contentClass}`}>
          {
            loading ? <HashLoader color="#F7D101" speedMultiplier={5}/>
            : 
            <Cards coursesData = {coursesData} category = {category}/>
          }
        </div>
      </div>

      
      <ToastContainer/>
      

    </section>
  );
}
