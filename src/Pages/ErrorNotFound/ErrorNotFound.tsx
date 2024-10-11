import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ErrorNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8">Oops! You've ventured into an unexplored realm of the Meta Legends universe.</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-64 h-64 mb-8"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute inset-4 bg-purple-500 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute inset-8 bg-pink-500 rounded-full opacity-50 animate-bounce"></div>
      </motion.div>

      <button className='z-10'>
        <Link to="/" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
          Return to Home World
        </Link>
      </button>

      <p className="mt-8 text-sm text-gray-400">
        Lost? Contact our <Link to="/" className="underline hover:text-white">intergalactic support team</Link>.
      </p>
    </div>
  )
}
