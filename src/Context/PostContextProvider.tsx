import { createContext, useContext, useState } from "react";

const PostContext = createContext()

function PostContextProvider({ children }) {

    const [posts, setPosts] = useState([]);

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    )
}

function usePosts() {
    const result = useContext(PostContext);
    return result;
}

export {PostContextProvider, usePosts}