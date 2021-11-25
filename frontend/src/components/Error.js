import React from 'react'

const Error = ({message}) => {
    return (
        <div role='alert'>
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-8">
                {message}
            </div>
        </div>
    )
}

export default Error
