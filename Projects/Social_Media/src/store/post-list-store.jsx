import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    return currPostList
}

const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer( postListReducer, DEFAULT_POST_LIST );

    const addPost = () => {

    };

    const deletePost = () => {

    };

    return (
        <PostList.Provider value={{postList, addPost, deletePost}}>{children}</PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi Friends, I am going to Mumbai for holidays.',
    reactions: 2,
    userId: 'user9',
    tags: ["Vacation", "Mumbai", "Travel"],

},
{
    id: '2',
    title: 'My graduation day',
    body: 'In 2026, i will complete my graduation with a degree.',
    reactions: 5,
    userId: 'user4',
    tags: ["Graduation","Degree", "Education"],
},];

export default PostListProvider;