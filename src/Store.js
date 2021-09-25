import React, { useState } from "react";

const initialState = {
    search_bar_expanded: false,
    display_search_result_dropdown: false,
    search_term: "",
    selected_user_messages: "",
}

export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]} >{children}</Context.Provider>
    )
}
export default Store