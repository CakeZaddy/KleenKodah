import Link from 'next/link'

export default function Error404() {
  return (
    <div className='container mx-auto px-4 py-20 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Oops! Page Not Found</h1>
      <p className='text-xl text-gray-600 mb-8'>
        The requested page could not be found.
      </p>

      <p className='text-pink-600 hover:text-pink-800'>
        Go back to the{' '}
        <span>
          {' '}
          <Link href='/'>Home Page </Link>
        </span>
      </p>
    </div>
  )
}
