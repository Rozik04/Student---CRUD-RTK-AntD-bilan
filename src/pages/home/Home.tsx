import React from 'react'
import { useGetUsersQuery } from '../../redux/api/users'
import type { Student } from '../../types/Types'

const Home = () => {
  const { data, isLoading } = useGetUsersQuery({})
  console.log(data)

  if (isLoading) return <p className="text-center mt-10 text-lg">Loading...</p>

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((item: Student) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.phoneNumber}</p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Course:</span>{' '}
              {typeof item.courseName === 'string'
                ? item.courseName
                : `${item.courseName.name} (${item.courseName.symbol})`}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(Home)
