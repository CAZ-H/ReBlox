import ReactDOM from 'react-dom';

const DOMData = {


};

const renderPage = (component) => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
    ReactDOM.render(component, document.body);
};

export {
    DOMData,
    renderPage
};
