import React from 'react'
import { useSelector } from 'react-redux'

const GrandSonBox = () => {
  const count = useSelector(state=>state.count)
  const {id,pw} = useSelector(state=>state)
  return (
    <div>GrandSonBox
      <div>{count}</div>
      <div>
        아이디는 {id} 패스워드는 {pw}
      </div>
    </div>
  )
}

export default GrandSonBox