import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from '../../redux/actions';

import { get } from '../../utils/utils';

export default function CommunityContainer() {
    const dispatch = useDispatch();
    const continent = useSelector(get('continent'));
    const posts = useSelector(get('posts'));

    function handleChange({target : { value }}) {
        dispatch(loadPosts(value))
    }

    useEffect(() => {
        dispatch(loadPosts(continent));
    }, [])

    return (
        <div>
            <select
                name="regions"
                id="region-select"
                onChange={handleChange}
            >
                <option value="asia">asia</option>
                <option value="africa">africa</option>
                <option value="europe">europe</option>
                <option value="america">america</option>
                <option value="oceania">oceania</option>
            </select>
            <div>
                {posts?.map(({ user: { id, name }, post: { todo }}) => (
                    <section key={id}>
                        <div>
                            {name}
                        </div>
                        <div>
                            <ul>
                            {todo.map(({ id, taskTitle }) => (
                                <li key={id}>{taskTitle}</li>
                            ))}    
                            </ul>
                            
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
