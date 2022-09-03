import React, {useEffect, useState} from 'react'

interface ProfileStatusProps {
  propsStatus: string
  setUserStatus: (status: string) => void
}

const ProfileStatus = ({propsStatus, setUserStatus}: ProfileStatusProps) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(propsStatus)

  useEffect(() => {
    setStatus(propsStatus)
  }, [propsStatus])

  // componentDidUpdate(prevProps: {status: string}, prevState: object) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({status: this.props.status})
  //   }
  // }

  const handleInput = ({target}: any) => {
    setStatus(target.value)
  }

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = ({target}: any) => {
    setEditMode(false)
    setUserStatus(target.value)
  }

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus
            onBlur={deactivateEditMode}
            type='text'
            value={status}
            onChange={handleInput}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>{status}</span>
        </div>
      )}
    </div>
  )
}

export default ProfileStatus
