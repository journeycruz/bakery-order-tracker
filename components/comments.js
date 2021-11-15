import Date from './date'

export default function Comments({ comments = [] }) {
  return (
    <div className='max-w-2xl mt-36 mx-auto grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:max-w-7xl'>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">What people say</h2>
      <ul className=''>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className="mb-5">
            <hr className="mb-5" />
            <h4 className="mb-2 leading-tight"><a href={`mailto:${email}`}>{name}</a><br /> <span className='text-gray-500'><Date
              dateString={_createdAt}
            /></span></h4>
            <p className=''>{comment}</p>
            <hr  className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </div>
  )
}
