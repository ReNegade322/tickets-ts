import { useDispatch } from 'react-redux';
import { employeeClick } from '../../store/ticketSlice';
import { useSelector } from 'react-redux'

import './employee.css'

const Employee = (props) => {
    const dispatch = useDispatch();

    const {status} = useSelector(state => state.data);
    const mainData = useSelector(state => state.data.chosen)
    
    const url = `https://robohash.org/${props.id}${props.id + 1}${props.id + 2}.png`;
    let employeeClass = 'employee';

    if (status === 'resolved') {
        if (mainData !== null && props.id === mainData.id ) {
            employeeClass += ' chosen'
        }
    }

    return (
        <div className={employeeClass} onClick={() => dispatch(employeeClick(props))}>
                <div className='employee--preview--left'>
                    <img className='img' alt='' src={url}></img>
                    <span className='employee--preview--name'>{props.name}</span>                
                </div>
                <div>
                    <span className='employee--preview--text'>{props.username}</span>
                </div>
        </div>
    );
}
 
export default Employee;