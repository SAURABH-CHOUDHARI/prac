import React, { useState } from 'react'

const App = () => {
  const [searchelem, setSearchelem] = useState('')

  const data = [
    { name: "John Smith", city: "New York" },
    { name: "Emma Johnson", city: "Los Angeles" },
    { name: "Michael Brown", city: "Chicago" },
    { name: "Sarah Davis", city: "Houston" },
    { name: "James Wilson", city: "Phoenix" },
    { name: "Maria Garcia", city: "Philadelphia" },
    { name: "David Martinez", city: "San Antonio" },
    { name: "Lisa Anderson", city: "San Diego" },
    { name: "Robert Taylor", city: "Dallas" },
    { name: "Jennifer Thomas", city: "San Jose" },
    { name: "William Moore", city: "Austin" },
    { name: "Elizabeth Jackson", city: "Jacksonville" },
    { name: "Joseph White", city: "San Francisco" },
    { name: "Patricia Martin", city: "Columbus" },
    { name: "Richard Thompson", city: "Seattle" },
    { name: "Margaret Lee", city: "Denver" },
    { name: "Donald Harris", city: "Boston" },
    { name: "Linda Robinson", city: "Portland" },
    { name: "Daniel Clark", city: "Miami" },
    { name: "Barbara Rodriguez", city: "Atlanta" },
    { name: "Paul Lewis", city: "Toronto" },
    { name: "Karen Lee", city: "Vancouver" },
    { name: "Mark Walker", city: "Montreal" },
    { name: "Sandra Hall", city: "Calgary" },
    { name: "George Allen", city: "Ottawa" },
    { name: "Betty Young", city: "Edmonton" },
    { name: "Steven King", city: "London" },
    { name: "Dorothy Wright", city: "Manchester" },
    { name: "Kevin Lopez", city: "Liverpool" },
    { name: "Helen Hill", city: "Birmingham" },
    { name: "Edward Scott", city: "Glasgow" },
    { name: "Sharon Green", city: "Dublin" },
    { name: "Ronald Adams", city: "Sydney" },
    { name: "Carol Baker", city: "Melbourne" },
    { name: "Timothy Nelson", city: "Brisbane" },
    { name: "Ruth Carter", city: "Perth" },
    { name: "Jason Mitchell", city: "Auckland" },
    { name: "Virginia Perez", city: "Wellington" },
    { name: "Jeffrey Roberts", city: "Singapore" },
    { name: "Alice Turner", city: "Hong Kong" },
    { name: "Gary Phillips", city: "Tokyo" },
    { name: "Joyce Campbell", city: "Seoul" },
    { name: "Frank Parker", city: "Bangkok" },
    { name: "Judith Evans", city: "Mumbai" },
    { name: "Roger Edwards", city: "Delhi" },
    { name: "Marilyn Collins", city: "Dubai" },
    { name: "Dennis Stewart", city: "Paris" },
    { name: "Joan Morris", city: "Berlin" },
    { name: "Peter Morgan", city: "Rome" },
    { name: "Catherine Cooper", city: "Madrid" }
  ];

  const copydata = data.filter((elem) =>
    elem.name.toLowerCase().startsWith(searchelem.toLowerCase()) || elem.city.toLowerCase().startsWith(searchelem.toLowerCase())
  );

  return (
    <div className='w- ' >
      <input type="search" value={searchelem}
        placeholder='Enter Search Name...'
        onChange={(e) => { setSearchelem(e.target.value) }}
        className='bg-black text-white' />

      <div>
        {copydata.map((elem ,key) => {
          return (<div className='mt-4' key={key}>
            <h1>{elem.name}</h1>
            <h2>{elem.city}</h2>
          </div>)
        })};
      </div>
    </div>
  )
}

export default App