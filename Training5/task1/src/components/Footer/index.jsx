import React from 'react'
import StatusFilter from './StatusFilter'
import { useDispatch, useSelector } from 'react-redux'
import { statusFiltersChanged } from '../../redux/reducers/filter'
import SearchFilter from './SearchFilter'


const FooterPage = () => {
    const dispatch = useDispatch()
    const { status } = useSelector(state => state.filters)
    const onChangeStatus = status => dispatch(statusFiltersChanged(status))
    return (
        <div>
            <div className="search-filter">
                <h4>Filter by Search</h4>
                <SearchFilter />
            </div>
            <StatusFilter value={status} onChange={onChangeStatus} />
        </div>
    )
}

export default FooterPage