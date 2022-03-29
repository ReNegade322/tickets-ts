import React from 'react';
import { useSelector } from 'react-redux';
import './main-content.css';
var MainContent = function () {
    var mainData = useSelector(function (state) { return state.data.chosen; });
    var status = useSelector(function (state) { return state.data; }).status;
    var url = "https://robohash.org/".concat(mainData.id).concat(mainData.id + 1).concat(mainData.id + 2, ".png");
    if (status !== 'resolved') {
        return React.createElement("h1", null, "Loading...");
    }
    return (React.createElement("div", { className: 'main--content' },
        React.createElement("div", { className: 'content--top--bar' },
            React.createElement("span", { className: 'ticket--label' },
                "TICKET NO. ",
                React.createElement("p", { className: 'ticket--info' }, mainData.id)),
            React.createElement("span", { className: 'ticket--label' },
                React.createElement("p", { className: 'ticket--info' }, new Date().toString()))),
        React.createElement("div", { className: "main--content--block" },
            React.createElement("h2", { className: 'content--title' }, "Owner"),
            React.createElement("div", { className: "inner--content" },
                React.createElement("img", { className: 'content--img', alt: '', src: url }),
                React.createElement("label", { className: 'name' },
                    mainData.name,
                    React.createElement("p", { className: 'job' }, mainData.username)))),
        React.createElement("div", { className: "main--content--block" },
            React.createElement("h2", { className: 'content--title' }, "Details"),
            React.createElement("div", { className: "inner--content flex" },
                React.createElement("label", { className: 'content--label' },
                    "Email",
                    React.createElement("p", { className: 'info' }, mainData.email)),
                React.createElement("label", { className: 'content--label' },
                    "Adress",
                    React.createElement("p", { className: 'info' },
                        "City: ",
                        mainData.address.city),
                    React.createElement("p", { className: 'info' },
                        "Street: ",
                        mainData.address.street)),
                React.createElement("label", { className: 'content--label' },
                    "Phone",
                    React.createElement("p", { className: 'info' }, mainData.phone)))),
        React.createElement("div", { className: "main--content--block" },
            React.createElement("h2", { className: 'content--title' }, "Asset"),
            React.createElement("div", { className: "inner--content flex" },
                React.createElement("label", { className: 'content--label' },
                    "Website",
                    React.createElement("p", { className: 'info' }, mainData.website)),
                React.createElement("label", { className: 'content--label' },
                    "Company",
                    React.createElement("p", { className: 'info' }, mainData.company.name)),
                React.createElement("label", { className: 'content--label' },
                    "Description",
                    React.createElement("p", { className: 'info' }, mainData.company.catchPhrase))))));
};
export default MainContent;
