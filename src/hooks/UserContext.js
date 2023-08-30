import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"


const UserContext = createContext({})


export const UserProvider = ({ children }) => { //Resposabilidade do UserProvidade é manter as informações

    const [userData, setUserData] = useState({})

    const putUserData = async (userInfor) => {
        setUserData(userInfor)

        await localStorage.setItem('codeburgue:userData', JSON.stringify(userInfor))
    }

    async function logout(){
        await localStorage.removeItem("codeburgue:userData")
    }

    useEffect(() => {
        const loadUserData = async () => {
            const cliente = await localStorage.getItem('codeburgue:userData')

            if (cliente) {
                setUserData(JSON.parse(cliente))
            }

        }

        loadUserData()
    }, [])



    return (
        <UserContext.Provider value={{ putUserData, userData,logout }}>
            {children}
        </UserContext.Provider>
    )
}


//useContext que ira disponibiliza os dados para toda aplicação !
export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("userUser must be used with UserContext")
    }

    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}



