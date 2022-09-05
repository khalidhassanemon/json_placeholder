// user data function
const loadUsers=()=>{
fetch(`https://restcountries.com/v3.1/all`)
.then(res=>res.json())
.then(data=>displayCountry(data));
}


// post function 
function postData(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>res.json())
    .then(data=> postDataLoader(datas));
}



// user data function consoler
const displayCountry=(datas)=>{
    const countryContainer=document.getElementById('country-container');
    
      datas.forEach(country=>{
        // console.log(country.name)
      const countryDiv=document.createElement('div');

      countryDiv.classList.add('flags');
      countryDiv.innerHTML=`
      <h4>Name of Country : ${country.name.common}</h4>
      <p>Capital : ${country.capital}</p>
      <button onclick="CountryDetails('${country.cca2}')">Details</button>
      `;

      countryContainer.appendChild(countryDiv);
})
}

const CountryDetails=(code)=>{
const url=`https://restcountries.com/v3.1/alpha/${code}`;
 fetch(url)
// console.log(url);
.then(res=>res.json())
.then(data=>displayCountryDetail(data[0]))
}

const displayCountryDetail =(detailData)=>{
    const countryDetail=document.getElementById('country-detail');
    countryDetail.innerHTML=`
    <h2>Details About -${detailData.name.common}</h2>
    <img src="${detailData.flags.png}">
    `;
}
// post data consoler

const postDataLoader=user=>{
   const postContainer=document.getElementById('post-container');
   for(const User of user){
    const list=document.createElement('div');
    list.classList.add('poststyle');
    list.innerHTML=`
    <h4>User-${User.id}</h4>
    <p>Post-${User.title}</p>
    `;
    postContainer.appendChild(list);
   }
}