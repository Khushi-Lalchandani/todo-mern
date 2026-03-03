interface DeleteModalProps {
    onConfirm: () => void
    onCancel: () => void
}

const DeleteModal = ({ onConfirm, onCancel }: DeleteModalProps) => {
    return (
        /* Backdrop */
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

            {/* Modal Card */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6">

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6M14 11v6" />
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                </div>

                {/* Text */}
                <div className="text-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Delete Todo?</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">This action cannot be undone. The todo will be permanently removed.</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button onClick={onCancel} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-red-500 hover:bg-red-600 text-white transition">
                        Delete
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DeleteModal
