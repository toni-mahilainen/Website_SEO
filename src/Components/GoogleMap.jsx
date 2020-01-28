import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google}
                zoom={14}
                style={{
                    position: 'relative',
                    width: "600px",
                    height: "200px"
                  }}
                center={{
                    lat: 60.826359,
                    lng: 23.591212
                }}>
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: 60.818660, lng: 23.600825 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD_8IHVsxQgOu4rcjxJEBRcCYNnikji3CY"
})(MapContainer)