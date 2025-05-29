import React, { useState, useEffect } from 'react'
import { useUpdateUsersMutation } from '../../redux/api/users'
import type { Student } from '../../types/Types'

interface UpdateModalProps {
  isOpen: boolean
  onClose: () => void
  student: Student | null 
}

const UpdateModal: React.FC<UpdateModalProps> = ({ isOpen, onClose, student }) => {
  const [updateUser] = useUpdateUsersMutation()
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    courseName: '',
    phoneNumber: '',
  })

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        image: student.image,
        courseName: student.courseName,
        phoneNumber: student.phoneNumber,
      })
    }
  }, [student])

  if (!isOpen || !student) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateUser({ id: student.id, ...formData }).unwrap()
      onClose()
    } catch (err) {
      console.error('Update error:', err)
    }
  }

  return (
    <div className="fixed inset-0 bg-white/95 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md relative">
        <h2 className="text-xl font-semibold mb-4">Update Student</h2>
        <form onSubmit={handleUpdate} className="space-y-3">
          <input onChange={handleChange} name='name' value={formData.name} placeholder='Name' type="text" className="w-full p-2 border rounded" />
          <input onChange={handleChange} name='image' value={formData.image} placeholder='Image URL' type="text" className="w-full p-2 border rounded" />
          <input onChange={handleChange} name='courseName' value={formData.courseName} placeholder='Course Name' type="text" className="w-full p-2 border rounded" />
          <input onChange={handleChange} name='phoneNumber' value={formData.phoneNumber} placeholder='Phone Number' type="text" className="w-full p-2 border rounded" />
          <div className="flex justify-end space-x-2 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateModal
