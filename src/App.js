import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorroMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
     
    </div>
    // netflix-clone-9dfb2
  );
}

export default App;
