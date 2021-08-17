import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getOtherInfo } from '../../redux/actions/userAction'
import { RootStore, IUser } from '../../utils/TypeScript'

import Loading from '../global/Loading'


interface IProps {
  id: string
}

const OtherInfo: React.FC<IProps> = ({id}) => {
  const [other, setOther] = useState<IUser>()

  const { otherInfo } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!id) return;

    if(otherInfo.every(user => user._id !== id)){
      dispatch(getOtherInfo(id))
    }else{
      const newUser = otherInfo.find(user => user._id === id)
      if(newUser) setOther(newUser)
    }
  },[id, otherInfo, dispatch])


  if(!other) return <Loading />;
  return (
    <div className="profile_info text-center rounded">
      <div className="info_avatar">
        <img src={other.avatar} alt="avatar" />
      </div>

      <h5 className="text-uppercase text-danger">
        {other.role}
      </h5>

      <div>
        Name: <span className="text-info">
          {other.name}
        </span>
      </div>

      <div>Email / Phone number</div>
      <span className="text-info">
        {other.account}
      </span>

      <div>
        Join Date: <span style={{color: '#ffc107'}}>
          { new Date(other.createdAt).toLocaleString() }
        </span>
      </div>
    </div>
  )
}

export default OtherInfo
