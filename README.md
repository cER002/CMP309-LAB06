# CMP309 - Assignment 06

## File Organization

```text
/assignment6
 ├─ src/                    —> project root
 │   ├─ api/                
 │   │   └─ postsApi.js     —> API layer
 │   ├─ components/
 │   │   ├─ FilterForm.jsx  —> Controlled input for post filtering
 │   │   ├─ Post.jsx        —> Singular post component
 │   │   └─ PostList.jsx    —> Renderer component for posts
 │   ├─ reducer/
 │   │   └─ postsReducer.js —> Manages app state
 │   ├─ App.css             —> App styling and layouts
 │   ├─ App.jsx             —> Main app component
 │   ├─ index.css           —> Base styling
 │   └─ main.jsx            —> Entry point
 ├─ index.html
 ├─ package.json
 └─ README.md
```

## Challenges Faced

- Understanding what to do with the fetch request in `fetchPosts()`
- Figuring out how to make proper use of useReducer and passing correct parameters to the `dispatch({...})` function
- Properly handling promises within the `useEffect()` hook
- How to search for a substring within a string with `.includes()`
