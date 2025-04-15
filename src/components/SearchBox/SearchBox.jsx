import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import {changeFilter} from '../../redux/filters/slice'
import { useId } from 'react';
import css from './SearchBox.module.css'


export default function SearchBox() {
    
    const filterId = useId();
    const nameFilter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleFilterSearch = (event) => {
        dispatch(changeFilter(event.target.value));
}

    
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor={filterId}> Search</label>
            <input className={css.input} type="text" value={nameFilter} id={filterId} onChange={handleFilterSearch}/>
        </div>
      
    )
}