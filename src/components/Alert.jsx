import React from 'react'

function Alert({ status }) {

    const alertStyles = {
        danger: 'text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400',
        success: 'text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400',
        warning: 'text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
    }

    return (
        <div className={`p-4 mb-4 text-sm ${alertStyles[status.type]}`} role="alert">
            <span className="font-medium">{status.message}</span>
        </div>
    )
}

export default Alert
