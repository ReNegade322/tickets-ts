import { useSelector } from 'react-redux'
import Employee from '../employee/employee'

import './employees-list.css'

const EmployeesList = () => {
    const data = useSelector(state => state.data.data)
    const {status} = useSelector(state => state.data)

    return (
        <div className='employees--list'>
            <div className='side-bar--titles'>
                <div>
                    <span className='owner--title'>OWNER</span>
                    <span className='reported--title'>REPORTED</span>
                </div>
                <span className='user--title'>USERNAME</span>
            </div>

            {status === 'loading' && <h1>Loading...</h1>}

            {data.map((employee) => (
                <Employee key={employee.id} {...employee}/>
            ))}
        </div>       
    )
}

export default EmployeesList