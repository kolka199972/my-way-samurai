import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhotoUrl from '../../assets/img/user.png'

class Users extends React.Component {
  constructor(props) {
    super(props)

    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.onSetUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.users.map((u) => (
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
                  <button onClick={() => this.props.onUnfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.onFollow(u.id)}>
                    Follow
                  </button>
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
}

export default Users
