import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex grow items-center justify-center bg-gray-50 p-4">
      <div className="flex flex-col gap-6 p-10 bg-white rounded-2xl shadow-xl border border-gray-100 min-w-[300px] text-center">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-2">דוגמאות</h1>
        <nav className="flex flex-col gap-4">
          <Link
            to="/example1"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
          >
            דוגמה 1
          </Link>
          <Link
            to="/example2"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
          >
            דוגמה 2
          </Link>
          <Link
            to="/example3"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
          >
            דוגמה 3
          </Link>
          <Link
            to="/example4"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
          >
            דוגמה 4
          </Link>
          <Link
            to="/example5"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
          >
            דוגמה 5
          </Link>
        </nav>
      </div>
    </div>
  )
}
