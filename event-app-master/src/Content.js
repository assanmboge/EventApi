import React from 'react';
import {Link} from 'react-router-dom';

const Content = ({ events }) => {
  console.log(events);
  return (
    <React.Fragment>
      { events.map(( item, index ) => {
        const dateString = item.event_dates.starting_day;
        const currentTime = new Date(dateString);
        const month = currentTime.getMonth() + 1;
        const day = currentTime.getDate();
        const year = currentTime.getFullYear();
        const hour = currentTime.getHours();
        const min = currentTime.getMinutes();
        var date = day + "." + month + "." + year + " klo " +  hour;
        const handleClick = () => {
          console.log('clicked!');
      };

        return (

          <div className='grid-item' key = { index }>
            <Link to={{
              pathname:'/events',
              state: { item : item, date : date }
            }}>
            <img className='event-image' onClick={handleClick} src={ item.description.images.length > 0 ? item.description.images[0].url : 'img/event.png' } alt='event' /> </Link>
            <div className='date'> { date } </div>
            <div className='name'> { item.name.fi } </div>
            <div className='address'> { item.location.address.street_address }, { item.location.address.locality} </div>

          </div>

        )
      })}
    </React.Fragment>
  );
};


export default Content;
