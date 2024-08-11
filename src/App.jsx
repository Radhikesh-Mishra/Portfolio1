import React from 'react';
import About from './components/About';
import Card from './components/ProjectCard';
import './App.css';

function App() {
  const projects = [
    {
      title:'Blood Bank',
      desc:'The Blood Bank app, built with React, allows users and hospital staff to sign in or log in, request or donate blood, and manage blood requests and donations efficiently.',
      tech:'React, JSX, Firebase, Bootstrap',
      link:'https://github.com/Radhikesh-Mishra/Blood-Bank'
    },
    {
      title:'Real Time Stock App',
      desc:'A real-time stock app where users can view live stock prices by entering company ticker symbols, providing up-to-date financial data and insights for informed investment decisions.',
      tech:'React, JSX, APIs, Bootstrap',
      link:'https://github.com/Radhikesh-Mishra/Real-Time-Stock-App'
    },
    {
      title:'Meme Generator',
      desc:'The Meme Generator app, built with React, lets users select images, add text, customize content, create personalized memes, and download them easily, offering a fun and seamless meme creation experience.',
      tech:'React, JSX, APIs, Bootstrap',
      link:'https://github.com/Radhikesh-Mishra/Meme-Generator '
    },
    {
      title:'Tic Tac Toe Game',
      desc:'The Tic Tac Toe game, built with React, allows players to enter names, compete, see the winner announced, and track performance in a results table, all through an intuitive, real-time interface.',
      tech:'React, JSX, Bootstrap',
      link:'https://github.com/Radhikesh-Mishra/Tic-Tac-Toe-Game'
    },
    {
      title:'Weather Forecast App',
      desc:"The weather forecast app provides real-time weather updates for any specified city or automatically detects and displays the current weather for the user's location when no city is mentioned, ensuring accurate and convenient weather information on demand.",
      tech:'React, Bootstrap, APIs, JSX',
      link:'https://github.com/Radhikesh-Mishra/Weather-Forecast-App'
    },
    {
      title:'Todo List App',
      desc:'A streamlined To-Do List app designed for easy task management. Users can add, edit, and delete tasks, with a clean, intuitive interface. Perfect for staying organized and productive, whether managing daily tasks or planning long-term projects.',
      tech:'React, JSX',
      link:'https://github.com/Radhikesh-Mishra/Todo-List-App'
    },
    {
      title:'Blogify',
      desc:'Blogify is an interactive platform that allows users to sign in, create, and upload their own blogs. Users can also explore and read blogs posted by others, leaving comments to engage in discussions, fostering a dynamic and collaborative blogging community.',
      tech:'Nodejs, Express, EJS, MongoDB, Multer, JWT',
      link:'https://github.com/Radhikesh-Mishra/Blogify'
    },
    {
      title:'Cafe Store App',
      desc:'The cafe store web app allows users to effortlessly view the menu and book reservations online. This user-friendly platform ensures a seamless experience for customers, enhancing their dining convenience and satisfaction. ',
      tech:'Nodejs, Express, EJS, MongoDB, Nodemailer',
      link:'https://github.com/Radhikesh-Mishra/Cafe-Haven'
    },
    {
      title:'Concert Ticket App',
      desc:'A concert ticket app where users can seamlessly purchase tickets, explore and buy merchandise, and stay informed with dates and locations of upcoming concerts, all in one convenient platform.',
      tech:'Nodejs, Express, EJS',
      link:'https://github.com/Radhikesh-Mishra/Concert-Vault'
    },
  ]
  return (
    <div className='App'>
      <About />
      <div style={{backgroundColor: '#04042b', padding:'50px'}}>
      {
        projects.map((project) => <Card title={project.title} link={project.link} desc={project.desc} tech={project.tech}/>)
      }
      </div>
     
    </div>
  );
}

export default App;
