import React, { ReactElement } from 'react'


function Image(props: any): ReactElement {
    return (
        <img {...props} src={"http://localhost:1337"+props.src} />
    )
}

export default Image
