const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'How are you?', likesCount: 20},
      {id: 2, message: "It's my first post", likesCount: 25},
      {id: 3, message: 'Visual Studio Code', likesCount: 24},
      {id: 4, message: 'WebStorm', likesCount: 42}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Kolya'},
      {id: 2, name: 'Julia'},
      {id: 3, name: 'Kirill'},
      {id: 4, name: 'Dasha'},
      {id: 5, name: 'Sveta'}
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'I am Lion'},
      {id: 3, message: 'My name'},
      {id: 4, message: 'Yo'},
      {id: 5, message: 'Yoooo'}
    ]
  },
  sideBar: {
    friends: [
      {id: 1, name: 'Julia'},
      {id: 2, name: 'Kirill'},
      {id: 3, name: 'Roma'}
    ]
  }
}

export const addPost = (text) => {
  const newPost = {id: Date.now(), message: text, likesCount: 42}

  state.profilePage.posts.push(newPost)
}

export default state
