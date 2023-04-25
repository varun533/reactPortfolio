import React from 'react';
import { useState } from 'react';



export default function Projects(){
    const cardData = [
        {
          id: 1,
          imageUrl: 'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Software Developments',
          description: 'The process of designing, building, and maintaining software applications.',
        },
        {
          id: 2,
          imageUrl: 'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Ui Designing',
          description: 'The process of designing the user interface (UI) for software applications or websites.',
        },
        {
          id: 3,
          imageUrl: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Graphics designs',
          description: 'The creation of visual content for various media, including websites, print, and advertising.',
        },
        {
          id: 4,
          imageUrl: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Problem solvings',
          description: 'The ability to identify, analyze, and solve complex problems in a logical and effective manner.',
        },
        {
          id: 5,
          imageUrl: 'https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Electronic chips',
          description: ' Integrated circuits (ICs) that perform various functions in electronic devices, from microprocessors to sensors.',
        },
        {
          id: 6,
          imageUrl: 'https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Aurdino',
          description: 'An open-source hardware and software platform used to create interactive electronic projects.',
        },
      ];

    return(
        <section className="proj-sec">
    <h1><span>My Projects</span></h1>


    <div className='projects' id='proj'>
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-image">
            <img src={card.imageUrl} alt={card.title} />
          </div>
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>


    </section>
    )
}