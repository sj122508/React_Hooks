import React from 'react'

function Title() {
    console.log('Title Render')
  return (
    <div>Component Title</div>
  )
}

export default React.memo(Title)
// export default Title