var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Employee from '../employee/employee';
import React from 'react';
import { useSelector } from 'react-redux';
import './employees-list.css';
var EmployeesList = function (_a) {
    var text = _a.text;
    var data = useSelector(function (state) { return state.data.data; });
    var status = useSelector(function (state) { return state.data; }).status;
    var newData = data;
    if (status !== 'loading' && text !== '') {
        newData = data.filter(function (item) { return item.name.includes(text) || item.username.includes(text); });
    }
    console.log(text);
    return (React.createElement("div", { className: 'employees--list' },
        React.createElement("div", { className: 'side-bar--titles' },
            React.createElement("div", null,
                React.createElement("span", { className: 'owner--title' }, "OWNER"),
                React.createElement("span", { className: 'reported--title' }, "REPORTED")),
            React.createElement("span", { className: 'user--title' }, "USERNAME")),
        status === 'loading' && React.createElement("h1", null, "Loading..."),
        newData.map(function (employee) { return (React.createElement(Employee, __assign({ key: employee.id }, employee))); })));
};
export default EmployeesList;
