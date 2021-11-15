import Date from "./date";

export default function Comments({ comments = [] }) {
  console.log(comments)
  return (
    <div className='mt-36'>
      <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mb-6 max-w-2xl mx-auto px-4'>
        What people say
      </h2>
      <ul className='max-w-2xl mx-auto px-4'>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className='mb-5'>
            <hr className='mb-5' />
            <h4 className='mb-1 leading-tight'>
              <a href={`mailto:${email}`}>{name}</a>
              <br />
            </h4>
            <span className='text-gray-500'>
              <Date dateString={_createdAt} />
            </span>
            <p className='mt-3'>{comment}</p>
            <hr className='mt-5 mb-5' />
          </li>
        ))}
      </ul>
    </div>
  );
}
