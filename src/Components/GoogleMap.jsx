import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const MapPoint = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
    }}>
        {text}
    </div>
);

class SimpleMap extends Component {
    static defaultProps = {
        center: { lat: 60.723154, lng: 23.251800 },
        zoom: 9.5
    };

    render() {
        return (
            <div style={{ height: '100%', width: '300px' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <MapPoint
                        lat={60.652529}
                        lng={23.138526}
                        text={'SEO Koski'}
                    />
                    <MapPoint
                        lat={60.774832}
                        lng={23.366284}
                        text={'SEO Palikkala'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;