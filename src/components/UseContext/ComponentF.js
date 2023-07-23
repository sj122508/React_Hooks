import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../../App';

function ComponentF() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    // const userProps = UserContext.Consumer
  return (
    <div>
        <UserContext.Consumer>
            {value => {
                return <div>User context value {user} </div>
            }}
        </UserContext.Consumer>

        {user} - {channel}
    </div>
  )
}

export default ComponentF