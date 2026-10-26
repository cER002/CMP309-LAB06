import { useState, useReducer, useEffect } from 'react'
import FilterForm from './components/FilterForm.jsx'
import PostList from './components/PostList.jsx'
import postReducer from './reducer/postReducer.js'
import fetchPosts from './api/postApi.js'
import './App.css'

function App() {
  const [filterValue, setFilterValue] = useState("")
  const [postsState, dispatch] = useReducer(postReducer, {
    posts: [],
    loading: false,
    error: null
  })

  useEffect(() => {
    dispatch({ type: 'FETCH_START' })

    fetchPosts()
      .then((data) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
    })
    .catch((error) => { 
      dispatch( { type: 'FETCH_ERROR', payload: error.message })
    })
  }, [])

  const posts = postsState.posts.filter((post) => post.title.toLowerCase().includes(filterValue.toLowerCase()))

  return (
    <>
      <FilterForm filterValue={filterValue} setFilterValue={setFilterValue} />
      {postsState.loading && <p className='loading-message'>Loading...</p>}
      {postsState.error && <p className='fail-message'>Fetch failed! {postsState.error}</p>}
      {!postsState.loading && !postsState.error && posts.length === 0 && <p className='notfound-message'>No posts found</p>}
      {!postsState.loading && !postsState.error && posts.length > 0 && <PostList posts={posts} />}
    </>
  )
}

export default App
