//creating a custom render function which decides how the
// react element will be rendered in the browser

function customRender(reactElement,container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);   */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props
        [prop]);
    }
    container.appendChild(domElement);
}

//this is the react element that we want to render in the browser
const reactElement = {
    type : "a",
    props : {
        href :"https://www.google.com",
        target : "_blank"
    },
    children: 'click me to visit google'
}

//var root = document.querySelector('#root');
//creating a maincontainer that will be used to render the react element
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);

