import React, { useContext, useState } from 'react'

export const dataa = useContext(null)

const DataContext = ({children}) => {
    const [dataa, setDataa] = useState("World")
    return <dataa.Provider children data={[dataa,setDataa]}/>;
}

export default DataContext