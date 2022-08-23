import React from 'react'
import s from './Users.module.css'
import userPhotoUrl from '../../assets/img/user.png'
import {IUser} from '../../models'
import {Link} from 'react-router-dom'
import {userAPI} from '../../api/api'

interface UsersProps {
  onSetCurrentPage: (pageNumber: number) => void
  onUnfollow: (id: number) => void
  onFollow: (id: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: IUser[]
}

const Users = ({
  totalUsersCount,
  currentPage,
  pageSize,
  users,
  onFollow,
  onUnfollow,
  onSetCurrentPage
}: UsersProps) => {
  let pagesNumber = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesNumber && i < 10; i++) {
    pages.push(i)
  }

  return (
    <>
      {pages.map((p) => (
        <span
          className={currentPage === p ? s.selectedPage : ''}
          key={p}
          onClick={() => onSetCurrentPage(p)}
        >
          {' ' + p}
        </span>
      ))}
      {users.map((u: IUser) => (
        <div key={u.id}>
          <span>
            <div>
              <Link to={'/profile/' + u.id}>
                <img
                  className={s.userPhoto}
                  src={u.photoUrl ? u.photoUrl : userPhotoUrl}
                  alt='ava'
                />
              </Link>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    userAPI.unfollowUser(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        onUnfollow(u.id)
                      }
                    })
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    userAPI.followUser(u.id).then((data) => {
                      if (data.resultCode === 0) {
                        onFollow(u.id)
                      }
                    })
                  }}
                >
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

export default Users
