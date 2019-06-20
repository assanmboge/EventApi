import React from 'react';
import EventMap from './EventMap';
import { Link } from 'react-router-dom';


const Events = ( props ) => {
  return (
    <React.Fragment>
      <Link to="/"> <h3>Close</h3> </Link>
      <img className='event-image' src={ props.location.state.item.description.images.length > 0 ? props.location.state.item.description.images[0].url : 'img/event.png' } alt='event' />
      <div className='name'> { props.location.state.item.name.fi } </div>
      <div className='address'> { props.location.state.item.location.address.street_address }, { props.location.state.item.location.address.locality} </div>
      <div className='date'> { props.location.state.date } </div>
      <div className='intro'> { props.location.state.item.description.intro } </div>
      <div className='body'dangerouslySetInnerHTML={{__html:props.location.state.item.description.body}}/>
      <EventMap lat={props.location.state.item.location.lat} lng= {props.location.state.item.location.lon}/>
    </React.Fragment>


  );
};

export default Events;
