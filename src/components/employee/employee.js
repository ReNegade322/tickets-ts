import { useDispatch } from 'react-redux';
import { employeeClick } from '../../store/ticketSlice';

import './employee.css'

const Employee = (props) => {
    const dispatch = useDispatch();
    const url = `https://robohash.org/${props.id}${props.id + 1}${props.id + 2}.png`
    return (
        <div className='employee' onClick={(e) => dispatch(employeeClick(props))}>
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