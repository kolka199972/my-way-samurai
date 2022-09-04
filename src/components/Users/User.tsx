import React from 'react'
import {Link} from 'react-router-dom'
import userPhotoUrl from '../../assets/img/user.png'
import {IUser} from '../../models'
import s from './Users.module.css'

interface UserProps {
  user: IUser
  followingInProgress: Array<number>
  onUnfollow: (id: number) => void
  onFollow: (id: number) => void
}

const User = ({user, followingInProgress, onUnfollow, onFollow}: UserProps) => {
  return (
    <div>
      <span>
        <div>
          <Link to={'/profile/' + user.id}>
            <img
              className={s.userPhoto}
              src={user.photoUrl ? user.photoUrl : userPhotoUrl}
              alt='ava'
            />
          </Link>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(
                (id: number) => id === user.id
              )}
              onClick={() => onUnfollow(user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(
                (id: number) => id === user.id
              )}
              onClick={() => onFollow(user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </span>
      </span>
    </div>
  )
}

export default User
