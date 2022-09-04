import profileReducer, {addPostAC, deletePostAc} from './profileReducer'

const initialState = {
  posts: [
    {id: 1, message: 'How are you?', likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 25},
    {id: 3, message: 'Visual Studio Code', likesCount: 24},
    {id: 4, message: 'WebStorm', likesCount: 42}
  ]
}

it('Length of posts should be incremented', () => {
  // 1. test data
  const action = addPostAC('42')
  // 2. action
  const newState = profileReducer(initialState, action)
  // 3. expectation
  expect(newState.posts.length).toBe(5)
})

it('Message of new post should be correct', () => {
  const action = addPostAC('42')
  const newState = profileReducer(initialState, action)
  expect(newState.posts[4].message).toBe('42')
})

it('After deleting length of post should be decrement', () => {
  const action = deletePostAc(3)
  const newState = profileReducer(initialState, action)
  expect(newState.posts.length).toBe(3)
})

it('After deleting length of post should not be changed if id is not correct', () => {
  const action = deletePostAc(10000)
  const newState = profileReducer(initialState, action)
  expect(newState.posts.length).toBe(4)
})
