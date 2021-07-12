import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FormSubmit, RootStore } from '../utils/TypeScript'

import { createCategory } from '../redux/actions/categoryAction'

import NotFound from '../components/global/NotFound'

const Category = () => {
  const [name, setName] = useState('')

  const { auth, categories } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    if(!auth.access_token || !name) return;

    dispatch(createCategory(name, auth.access_token))

    setName('')
  }

  if(auth.user?.role !== 'admin') return <NotFound />
  return (
    <div className="category">
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category</label>

        <div className="d-flex">
          <input type="text" name="category" id="category"
          value={name} onChange={e => setName(e.target.value)} />

          <button type="submit">Create</button>
        </div>
      </form>

      <div>
        {
          categories.map(category => (
            <div className="category_row" key={category._id}>
              <p className="m-0 text-capitalize">{category.name}</p>

              <div>
                <i className="fas fa-edit mx-2" />
                <i className="fas fa-trash-alt" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category
