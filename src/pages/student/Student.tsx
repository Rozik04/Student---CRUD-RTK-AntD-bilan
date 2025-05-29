import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserQuery } from '../../redux/api/users'

const GetStudent = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGetUserQuery(id)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-medium text-gray-600">Loading...</p>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Failed to load student data.</p>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <img
          src={data.image}
          alt={data.name}
          className="w-32 h-32 object-cover mx-auto rounded-full mb-4 shadow"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">{data.name}</h1>
        <p className="text-gray-600 mb-1">{data.courseName}</p>
        <p className="text-gray-600 mb-1">{data.phoneNumber}</p>
        <p className="text-gray-500 text-sm mt-2">{new Date(data.createdAt).toLocaleString()}</p>
      </div>
    </div>
  )
}

export default React.memo(GetStudent)
