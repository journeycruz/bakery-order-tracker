import Date from "./date";
import StarRatings from "react-star-ratings";

export default function Comments({ comments = [] }) {
  return (
    <div className='mt-20'>
      <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mb-6 max-w-2xl mx-auto px-4'>
        What people say
      </h2>
      <ul className='max-w-2xl mx-auto px-4'>
        {comments?.map(({ _id, _createdAt, name, email, comment, rating }) => (
          <li key={_id} className='mb-5'>
            <hr className='mb-5' />
            <div className='flex justify-between'>
              <h4 className='mb-1 leading-tight'>
                <a>{name}</a>
              </h4>
              <br />
              <StarRatings
                rating={parseFloat(rating)}
                starDimension='20px'
                starSpacing='0px'
                starRatedColor='orange'
              />
            </div>
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
