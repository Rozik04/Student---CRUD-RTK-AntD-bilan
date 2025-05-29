import React, { useState } from 'react'
import { useDeleteUsersMutation, useGetUsersQuery } from '../../redux/api/users'
import type { Student } from '../../types/Types'
import UpdateModal from '../updateModal/UpdateModal'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { data, isLoading } = useGetUsersQuery({})
  const [deleteUsers] = useDeleteUsersMutation()
  const navigate = useNavigate()
  console.log(data)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)

  const handleUpdateClick = (student: Student) => {
    setSelectedStudent(student)
    setIsModalOpen(true)
  }

  const handleDelete = (id:string) => {
      deleteUsers(id)
  }

  if (isLoading) return <p className="text-center mt-10 text-lg">Loading...</p>

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((item: Student) => (
        <div 
          key={item.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <img
            onClick={()=>navigate(`student/${item.id}`)}
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-1">
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.phoneNumber}</p>
            <p className="text-sm text-gray-500">{item.courseName}</p>
            <button onClick={()=>handleDelete(item.id)} className='bg-red-100 text-red-900 p-2 rounded-[15px] hover:bg-red-200 transition duration-200'>Delete</button>
            <button onClick={()=>handleUpdateClick(item)} className='bg-green-100 text-green-900 p-2 rounded-[15px] hover:bg-green-200 transition duration-200'>Update</button>

          </div>
        </div>
      ))}
    <UpdateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} student={selectedStudent}/>
    </div>
  )
}

export default React.memo(Home)
