import Employee from '../employee/employee'
import { useSelector } from 'react-redux'

import type { RootState } from '../../store'
import './employees-list.css'

const EmployeesList = ({text} :any) => {
    const data = useSelector((state: RootState) => state.data.data)
    const {status} = useSelector((state: RootState) => state.data)
    let newData = data
    
    if (status !== 'loading' && text !== '') {
        newData = data.filter((item :any) => item.name.includes(text) || item.username.includes(text))
    }

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

            {newData.map((employee :any) => (
                <Employee key={employee.id} {...employee}/>
            ))}
        </div>       
    )
}

export default EmployeesList