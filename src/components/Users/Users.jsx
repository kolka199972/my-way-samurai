import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhotoUrl from '../../assets/img/user.png'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.onSetUsers(response.data.items)
        this.props.onSetTotalUsersCount(response.data.totalCount)
      })
  }

  setCurrentPage = (pageNumber) => {
    this.props.onSetCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.onSetUsers(response.data.items)
      })
  }

  render() {
    let pagesNumber = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    )
    let pages = []
    for (let i = 1; i <= pagesNumber && i < 10; i++) {
      pages.push(i)
    }

    return (
      <>
        {pages.map((p) => (
          <span key={p} onClick={() => this.setCurrentPage(p)}>
            {' ' + p}
          </span>
        ))}
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={s.userPhoto}
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
