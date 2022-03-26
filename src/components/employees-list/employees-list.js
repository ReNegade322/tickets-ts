import { useSelector } from 'react-redux'
import Employee from '../employee/employee'

import './employees-list.css'

const EmployeesList = ({text}) => {
    const data = useSelector(state => state.data.data)
    const {status} = useSelector(state => state.data)
    let newData = data
    
    if (status !== 'loading' && text !== '') {
        newData = data.filter(item => item.name.includes(text) || item.username.includes(text))
    }
    console.log(text)
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

            {newData.map((employee) => (
                <Employee key={employee.id} {...employee}/>
            ))}
        </div>       
    )
}

export default EmployeesList