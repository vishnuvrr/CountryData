// fetch("https://restcountries.eu/rest/v2/all")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     for (const val in data) {
//       var img = document.createElement("img");
//       img.setAttribute("src", data[val].flag);
//       var country = document.createElement("h1");
//       country.innerText = data[val].name;
//       document.getElementById("country").appendChild(country);
//       document.getElementById("country").appendChild(img);
//     }
//   })
//   .catch((err) => console.log(err));


function displayCountryData(data,colId)
{
  for(const val in data)
  {
    console.log(val);
  }

  var countryName=document.createElement("p");
  countryName.innerText=`Country Name : ${data.name}`;

  var img=document.createElement("img");
  img.setAttribute("src",data.flag);

  var countryCapital=document.createElement("p");
  countryCapital.innerText=`Country Capital : ${data.name}`;

  var countryRegion=document.createElement("p");
  countryRegion.innerText=`Country Region : ${data.region}`;

  var countrySubRegion=document.createElement("p");
  countrySubRegion.innerText=`Country Sub Region : ${data.subregion}`;

  var countryPopulation=document.createElement("p");
  countryPopulation.innerText=`Country Population : ${data.population}`;


  document.getElementById(colId).appendChild(countryName);
  document.getElementById(colId).appendChild(img);
  document.getElementById(colId).appendChild(countryCapital);
  document.getElementById(colId).appendChild(countryRegion);
  document.getElementById(colId).appendChild(countrySubRegion);
  document.getElementById(colId).appendChild(countryPopulation);

  document.getElementById(colId).style.setProperty("border","dotted black 2px");


}

 function countryData()
 {
   var countryName=document.getElementById("country-name").value;
   document.getElementById("column1").innerText="";
   document.getElementById("column1").style.setProperty("border","");
   document.getElementById("column2").innerText="";
   document.getElementById("column2").style.setProperty("border","");

   console.log(countryName);
   fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
   .then((res)=>res.json())
   .then((data)=>
   {
     console.log(data);
     displayCountryData(data[0],"column1");
     if(data.length>1)
     {
       displayCountryData(data[1],"column2");

     }
   });

 }
