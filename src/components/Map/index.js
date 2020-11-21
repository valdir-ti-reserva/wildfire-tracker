import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
  return (
    <div>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA9GvjJhRuaZc0xjgnO5dgw87GIqQ2RtdY' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        </GoogleMapReact>
      </div>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: -23.533773,
    lng: -46.625290
  },
  zoom: 6
}

export default Map
