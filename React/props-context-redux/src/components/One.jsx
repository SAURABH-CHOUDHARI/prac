import React, { useContext } from 'react'

const one = ({data}) => {
    const [dataa] = useContext(dataa)
    return (
        <div>{data} {dataa}</div>
    )
}

export default one