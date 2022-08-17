import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhotoUrl from '../../assets/img/user.png'

const Users = ({users, onFollow, onUnfollow, onSetUsers}) => {
  if (users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        onSetUsers(response.data.items)
      })
  }

  return (
    <>
      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={s.photo}
                src={u.photoUrl ? u.photoUrl : userPhotoUrl}
                alt='ava'
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => onUnfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => onFollow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </>
  )
}

export default Users
