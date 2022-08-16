import React from 'react'
import s from './Users.module.css'

const Users = ({users, onFollow, onUnfollow, onSetUsers}) => {
  if (users.length === 0) {
    onSetUsers([
      {
        id: 1,
        followed: true,
        photoUrl:
          'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
        fullName: 'Kirill',
        status: 'I am the best!',
        location: {
          country: 'Belarus',
          city: 'Minsk'
        }
      },
      {
        id: 2,
        followed: true,
        photoUrl:
          'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
        fullName: 'Rostik',
        status: 'I like money!',
        location: {
          country: 'Belarus',
          city: 'Minsk'
        }
      },
      {
        id: 3,
        followed: false,
        photoUrl:
          'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
        fullName: 'Ruslan',
        status: 'I am not the best!',
        location: {
          country: 'Belarus',
          city: 'Minsk'
        }
      },
      {
        id: 4,
        followed: true,
        photoUrl:
          'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
        fullName: 'Dmitriy',
        status: 'I am boss!',
        location: {
          country: 'Russia',
          city: 'Moscow'
        }
      },
      {
        id: 5,
        followed: false,
        photoUrl:
          'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
        fullName: 'Maks',
        status: 'I search the justice!',
        location: {
          country: 'Ukraine',
          city: 'Kiev'
        }
      }
    ])
  }

  return (
    <>
      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={s.photo} src={u.photoUrl} alt='ava' />
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </>
  )
}

export default Users
