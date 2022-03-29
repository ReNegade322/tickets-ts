import { useDispatch } from 'react-redux';
import { employeeClick } from '../../store/ticketSlice';
import { useSelector } from 'react-redux';
import React from 'react';
import './employee.css';
var Employee = function (props) {
    var dispatch = useDispatch();
    var status = useSelector(function (state) { return state.data; });
    var mainData = useSelector(function (state) { return state.data.chosen; });
    var url = "https://robohash.org/".concat(props.id).concat(props.id + 1).concat(props.id + 2, ".png");
    var employeeClass = 'employee';
    if (status === 'resolved') {
        if (mainData !== null && props.id === mainData.id) {
            employeeClass += ' chosen';
        }
    }
    return (React.createElement("div", { className: employeeClass, onClick: function () { return dispatch(employeeClick(props)); } },
        React.createElement("div", { className: 'employee--preview--left' },
            React.createElement("img", { className: 'img', alt: '', src: url }),
            React.createElement("span", { className: 'employee--preview--name' }, props.name)),
        React.createElement("div", null,
            React.createElement("span", { className: 'employee--preview--text' }, props.username))));
};
export default Employee;
