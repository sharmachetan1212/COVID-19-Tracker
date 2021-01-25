const APIURL ="https://corona.lmao.ninja/v2/countries/india";


async function getRecords(url){
    const response= await fetch(url);
    const resData = await response.json();
  //  console.log(resData);
  showRecords(resData);
}

 getRecords(APIURL);

 function showRecords(record){
    console.log(record);
    document.getElementById("main").innerHTML = 
    `
    <h2>Cases</h2>
 
    <div>
      <h3> cases</h3>
      <div>${record.cases}</div>
    </div>
    
    <div>
     <h3>Cases per Million</h3>
    <div>${record.casesPerOneMillion}</div>
    </div>
    <div>
     <h3>Today cases</h3>
    <div>${record.todayCases}</div>
    </div>
    <div>
    <h3>Population</h3>
   <div>${record.population}</div>
   </div>
   <div>
    <h3>Today Recovered </h3>
   <div>${record.recovered}</div>
   </div>
   <div>
    <h3>Tests  </h3>
   <div>${record.tests}</div>
   </div>
   <h3>Today Deaths </h3>
   <div>${record.todayDeaths}</div>
   </div>
   <h3> Today Recovered</h3>
   <div>${record.todayRecovered}</div>
   </div>
    `
 }