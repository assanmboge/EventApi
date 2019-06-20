     import React, { Component } from 'react'
     import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


       const mapStyles = {
        width: '100%',
        height: '100%',
       };
       class MapContainer extends Component {


        render() {

            return (

               <Map
                google={this.props.google}
                zoom={10}
                style={mapStyles}
               initialCenter={{ lat: 60.192059, lng: 24.945831}}
               center={{lat:this.props.lat, lng:this.props.lng}}
            >



      <Marker  position={{lat:this.props.lat, lng:this.props.lng}} />

              </Map>

            )

        }
       }

       export default GoogleApiWrapper({
         apiKey: (process.env.REACT_APP_GOOGLE_KEY)
       })(MapContainer)
