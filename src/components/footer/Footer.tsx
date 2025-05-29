import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 py-4 px-6 text-center shadow-inner">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} StudentApp. All rights reserved.
      </p>
    </footer>
  )
}

export default React.memo(Footer)
