import React, { useState } from 'react'
import type { Student } from '../../types/Types'
import { useCreateUsersMutation } from '../../redux/api/users'

const Create = () => {
  const [createUser] = useCreateUsersMutation()
  const [data, setData] = useState<Student>({
    id: new Date().getTime().toString(),
    name: '',
    image: '',
    courseName: '',
    phoneNumber: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUser(data)
    console.log(data)
    setData({
      id: new Date().getTime().toString(),
      name: '',
      image: '',
      courseName: '',
      phoneNumber: '',
    })
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create New Student</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={handleChange}
            name="name"
            value={data.name}
            placeholder="Name"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={handleChange}
            name="image"
            value={data.image}
            placeholder="Image URL"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={handleChange}
            name="courseName"
            value={data.courseName}
            placeholder="Course Name"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={handleChange}
            name="phoneNumber"
            value={data.phoneNumber}
            placeholder="Phone Number"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Create)
