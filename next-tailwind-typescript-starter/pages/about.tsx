import React, { Component } from 'react';
import Layout from '../components/Layout'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import List from '../components/List';
import { sampleFeedData } from '../utils/sample-data';

var counter = 0;

async function FetchForecast (latitude, longitude) 
{
  try{
    const responce = await fetch('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true')
    const data = await responce.json();
    const weather = data["current_weather"];
    const result = weather["temperature"];
    return (result);
  }
  catch{
    console.log("failed")
  }
}






export default function AboutPage (){

  const router = useRouter();
  const query = router.query;
  const username = query.username;

  var latitude;
  var longitude;
  var responce_api;

  const [location, setLocation] = useState(null);
  const [isShowing, setIsShowing] = useState(false)

  function timerManager() {
    setIsShowing((isShowing) => !isShowing)
    const btn = document.getElementById("timeoutButton")
    const counter_element = document.getElementById("counter")
  
    btn.setAttribute('disabled', '');
    btn.classList.add("animate-pulse")
  
    let countdown = 30;
    counter++;
    counter_element.textContent = counter.toString();
    btn.textContent = countdown.toString();
  
    var i = setInterval(function(){
      console.log(countdown);
      countdown--;
      btn.textContent = countdown.toString();
    
      if(countdown === 0) {
          clearInterval(i);
        btn.removeAttribute('disabled')
        btn.classList.remove("animate-pulse")
        btn.textContent = "Click"
      }
  }, 1000);
  
    
  }

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(async function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    responce_api = await FetchForecast(latitude,longitude);
    
    setLocation(responce_api);
    });
    
    
  },[])


  return (
    <Layout title="About">

<header className="sticky top-0 z-30 w-full bg-white  shadow-xl">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        {location? <a className="text-white bg-primary-700 focus:ring-4 focus:ring-primary-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 focus:outline-none dark:focus:ring-primary-800"><i className="fa-solid fa-cloud-sun"></i> {location} °C</a>
           : <div role="status">
    <svg aria-hidden="true" className= "mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>}

        

<div className="flex items-center lg:order-2">
<h1 className="block py-2 pr-4 pl-3 text-white bg-primary-700 font-bold rounded-lg border-b border-gray-100 lg:border-0 dark:border-gray-700">Welcome, {username?username: "random dude" }!</h1>
                    </div>
                    
                  
                    <span className="w-28 flex items-center lg:order-2">
                    <p id="counter"className="text-white bg-primary-700 font-medium rounded-lg text-sm px-4 ">0</p>
                    <button id="timeoutButton" onClick={timerManager} className="text-gray-700 bg-gray-200 hover:bg-primary-200 focus:ring-4 focus:ring-primary-300 rounded-3xl font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600  focus:outline-none dark:focus:ring-primary-800"><i className="fa-solid fa-bolt"></i></button>
          
              
          </span>
                   

        </div>
    </nav>
</header>


<div className="grid place-items-center py-1 bg-gradient-to-r from-purple-500 to-pink-500">
      <List items = {sampleFeedData}/>
</div>
 
     

    </Layout>

  )
}
