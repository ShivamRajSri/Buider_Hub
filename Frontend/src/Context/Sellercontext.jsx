import React, { createContext, useState } from 'react'

export const  SellerDatacontext = createContext()


const SellerContext = ({ children }) => {

    const [ user, setUser ] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })
    return (
        <div>
            <SellerDataContext.Provider value={{ user, setUser }}>
                {children}
            </SellerDataContext.Provider>
        </div>
    )
}

export default SellerContext;