import EmployeesList from './components/employees-list/employees-list';
import MainContent from './components/main-content/main-content';
import { fetchData } from './store/ticketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
function App() {
    var dispatch = useDispatch();
    var chosen = useSelector(function (state) { return state.data; }).chosen;
    var _a = useState(''), text = _a[0], setText = _a[1];
    useEffect(function () {
        dispatch(fetchData());
    }, [dispatch]);
    var updateSearch = function (text) {
        setText(text);
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("h1", { className: 'main--title' }, "Tickets"),
        React.createElement("hr", null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'side--bar' },
                React.createElement("input", { className: 'search--panel', type: "text", onChange: function (e) { return updateSearch(e.target.value); } }),
                React.createElement(EmployeesList, { text: text })),
            React.createElement("div", { className: 'ticket--selected' },
                chosen === null && React.createElement("h1", null, "No ticket selected"),
                chosen !== null && React.createElement(MainContent, null)))));
}
export default App;
