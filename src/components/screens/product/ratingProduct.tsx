import { FC } from 'react';
import product from './product';

import { IProductPageRating } from './types';
import Ratings from '@/components/catatalog/rating/ratings';
import { Link } from 'react-scroll';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const RatingProduct:FC<IProductPageRating>=({product})=>{
    const length = product.reviews.length
    if(!length) return null

    return(
        <div>
            <Ratings product={product}/>
            <div>
                <Link 
                to='reviews'
                className='opacity-50 font-semibold text-sm cursor-pointer'
                smooth={true}
                offset={-50}
                duration={1000}
                >
                    {length} Reviews <FiChevronDown className="inline"/>
                </Link>
            </div>

        </div>
    )
}
export default RatingProduct