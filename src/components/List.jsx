import React from 'react'

const List = () => {
  const candidateNames = [
    "William Cotter", "Patrick Denman", "George Devolder-Santos", "Ryan Kalata",
    "John Avlon", "Saint Jermaine Endeley", "Nancy Goroff", "Nicholas J. LaLota",
    "Rob Lubin", "Andrew Garbarino", "Daniel Goldman", "Yvette D. Clarke",
    "Nicole Malliotakis", "Alexandria Ocasio-Cortez", "Jerrold Nadler",
    "Tom Suozzi", "Grace Meng", "Hakeem Jeffries", "Ritchie Torres",
    "Jamaal Bowman", "Mondaire Jones", "Lee Zeldin", "Kathleen Rice",
    "Paul Tonko", "Elise Stefanik", "Mike Lawler", "Antonio Delgado",
    "Sean Patrick Maloney", "Chris Jacobs", "Joe Morelle"
  ];

  return (
    <div className='card-list'>
      {candidateNames.map((name, index) => (
        <div key={index} className="card">
          <img className='img' src="src/person.jpg" width={'120px'} />
          <p>{name}</p>
        </div>
      ))}

    </div>
  )
}

export default List