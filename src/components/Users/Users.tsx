import React from 'react'
import {IUser} from '../../models'
import Paginate from '../common/Paginate/Paginate'
import User from './User'

interface UsersProps {
  onSetCurrentPage: (pageNumber: number) => void
  onUnfollow: (id: number) => void
  onFollow: (id: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: IUser[]
  followingInProgress: Array<number>
}

const Users = ({
  totalUsersCount,
  currentPage,
  pageSize,
  users,
  onFollow,
  onUnfollow,
  onSetCurrentPage,
  followingInProgress
}: UsersProps) => {
  return (
    <>
      <Paginate
        portionSize={10}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onSetCurrentPage={onSetCurrentPage}
      />
      {users.map((u: IUser) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={followingInProgress}
          onFollow={onFollow}
          onUnfollow={onUnfollow}
        />
      ))}
    </>
  )
}

export default Users
