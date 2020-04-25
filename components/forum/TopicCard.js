import React from 'react'
import EyeIconSVG from '../svg/EyeIconSVG.js';
import CommentIconSVG from '../svg/CommentIconSVG.js';
import LikeIconSVG from '../svg/LikeIconSVG.js';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_VIEW_COUNT } from '../../gql/mutations';


const TopicCard = (props) => {
    const router = useRouter();

    let previousViews = ((props.data.viewCount === null) ? 1 : props.data.viewCount);

    const [updateViews] = useMutation(UPDATE_VIEW_COUNT);

    const handleChange = (e) => {
        e.preventDefault()
        router.push('/forum/[post]', `/forum/${props.data.id}`)
        updateViews({ variables: {
            id: props.data.id,
            viewCount: (previousViews += 1)
        }})
    }
    
    return (
        <div className="border-b-2 border-gray-50">
            <div className="flex">
                <div className="w-1/2">
                    <h1 
                        className="muli text-2xl my-4"
                        onClick={handleChange}>{props.data.title}</h1>
                    <p className="mb-4">{props.data.user.name}</p>
                </div>
                <div className="flex flex-1"></div>
                <div className="flex justify-end align-middle w-1/6">
                    <div className="my-4 mx-2 w-1/3">
                        <div className="flex">
                            <EyeIconSVG /> {props.data.viewCount || 0}
                        </div>
                    </div>
                    <div className="my-4 mx-2 w-1/3">
                        <div className="flex">
                            <CommentIconSVG /> {props.data.comments.length ? props.data.comments.length : 0}
                        </div>
                    </div>
                    <div className="my-4 mx-2 w-1/3">
                        <div className="flex">
                            <LikeIconSVG /> 0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicCard;