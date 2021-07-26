import React, { ReactElement } from 'react'

interface Props {
    
}

function MapBox({}: Props): ReactElement {
    return (
        
            <iframe className="w-full h-full absolute"  src="https://www.openstreetmap.org/export/embed.html?bbox=122.73917198181154%2C7.385619727854383%2C122.8825092315674%2C7.459496469553441&amp;layer=mapnik" ></iframe>
        
    )
}

export default MapBox
