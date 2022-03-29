import { useDispatch } from 'react-redux';
import { employeeClick } from '../../store/ticketSlice';
import { useSelector } from 'react-redux';

import type { RootState } from '../../store';

import './employee.css';

const Employee = (props: {id: number, name: string, username: string}) => {
    const dispatch = useDispatch();

    const status :any = useSelector((state: RootState) => state.data);
    const mainData :any = useSelector((state: RootState) => state.data.chosen)
    
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