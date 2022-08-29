import React from 'react'

interface ProfileStatusProps {
  status: string
  setUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
  state = {
    editMode: false,
    status: this.props.status
  }

  handleInput = ({target}: any) => {
    this.setState({
      status: target.value
    })
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = ({target}: any) => {
    this.setState({
      editMode: false
    })
    this.props.setUserStatus(target.value)
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus
              onBlur={this.deactivateEditMode}
              type='text'
              value={this.state.status}
              onChange={this.handleInput}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus
