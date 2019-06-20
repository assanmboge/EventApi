import React, { useState, useEffect }  from 'react';
import Content from './Content';
import Header from './Header';
import Buttons from './Buttons';



const Home = () => {
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    setIndex(index+1);
    console.log('clicked!');
};

useEffect(() => {
  if (loading) {
    fetch('http://localhost:3030/api/events/?limit=200')
    .then(res => res.json())
    .then((myData) => {
      setLoading(false);
      setEvents(myData.data);

      console.log(typeof(myData.data))
    })

    .catch(console.log)

  }})
  const handleClickSports = () => {
  fetch('http://localhost:3030/api/events/?tags_search=sports').then(res => res.json())
    .then((myData) => {
      setLoading(false);
      setEvents(myData.data);
    }).catch(function(err) {
  });
  };
  const handleClickMusic = () => {
  fetch('http://localhost:3030/api/events/?tags_search=music').then(res => res.json())
    .then((myData) => {
      setLoading(false);
      setEvents(myData.data);
    }).catch(function(err) {
  });
  };
  const handleClickKids = () => {
  fetch('http://localhost:3030/api/events/?tags_search=families').then(res => res.json())
    .then((myData) => {
      setLoading(false);
      setEvents(myData.data);
    }).catch(function(err) {
  });
  };
  const handleClickMusicals = () => {
  fetch('http://localhost:3030/api/events/?tags_search=musicals').then(res => res.json())
    .then((myData) => {
      setLoading(false);
      setEvents(myData.data);
    }).catch(function(err) {
  });
  };
  const handleClickFestival = () => {
  fetch('http://localhost:3030/api/events/?tags_search=festivals').then(res => res.json())
    .then((myData) => {
      setLoading(false);
      setEvents(myData.data);
    }).catch(function(err) {
  });
  };
  const handleClickTeatre = () => {
  fetch('http://localhost:3030/api/events/?tags_search=theatre').then(res => res.json())
    .then((myData) => {
      setLoading(false);
      setEvents(myData.data);
    }).catch(function(err) {
  });
  };

  const handleClickAll = () => {
fetch('http://localhost:3030/api/events/')  .then(res => res.json())
  .then((myData) => {
    setLoading(false);
    setEvents(myData.data);
  }).catch(function(err) {
});
};

    return (
      <React.Fragment>
        { loading || !events ? ( <div> Loading.... </div>
      ) : (
      <div className="App">
        <Header title='HeL EVENTS'/>
        <div className='action'>
        <main>
          <Buttons onClick={handleClickSports} buttonTitle=<p>Sports</p> icon="basketball" />
          <Buttons onClick={handleClickTeatre} buttonTitle=<p>Theater</p> icon="music" />
          <Buttons onClick={handleClickKids} buttonTitle=<p>Families</p> icon="kids" />
        </main>
        <main>
          <Buttons onClick={handleClickMusicals} buttonTitle=<p>Musicals</p>icon="concert" />
          <Buttons onClick={handleClickFestival} buttonTitle=<p>Festival</p> icon="festival" />
          <Buttons onClick={handleClickMusic} buttonTitle=<p>Music</p> icon="teater" />
        </main>
        <main className='all'>
        < Buttons onClick = { handleClickAll } buttonTitle = <p>All events</p> icon="all"  />
        </main>
        </div>
        <div className='grid-container'>
          <Content events={events} />
        </div>
      </div>
      )}
    </React.Fragment>
  )
}

export default Home;
