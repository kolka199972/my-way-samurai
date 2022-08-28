import React from 'react'

interface ProfileStatusProps {
  status: string
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
  state = {
    editMode: false
  }

  handleInput() {}

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
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
              value={this.props.status}
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
