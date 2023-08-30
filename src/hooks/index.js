import React from "react";
import PropTypes from "prop-types"

import {UserProvider} from "./UserContext"
import { CardProvider } from "./CartContext";

const AppProvider = ({children}) => (
<UserProvider>
    <CardProvider>
    {children}
    </CardProvider>
</UserProvider>
)


AppProvider.propTypes = {
    children:PropTypes.node
}

export default AppProvider