    
    // const heading = React.createElement(
    //     'h1',                        //react element
    //     {id: 'heading'},             // attributes as a props of react element
    //     'Hello World From React!'    // passing as children to react element
    // );
    // console.log(heading); //this will be not h1 tag but an object, a react element, react element is nothing but simple js object. 
    // const root = ReactDOM.createRoot(document.getElementById('root'));           
    // root.render(heading); // this render function's job is to take react element which is js object and convert it to h1 tag which browser will understand and put that up inside the root element.

//==========================================================================================//

    // //How to create nested elements like this in react
    // <div id='parent'>
    //     <div id='child'>
    //         <h1>This is h1 tag!</h1>
    //         <h2>This is h1 tag!</h2>
    //     </div>
    // </div>

    const parent = React.createElement(
        'div',
        {id: 'parent'},
        React.createElement(
            'div',
            {id: 'child'},
            [ React.createElement('h1', {}, 'This is h1 tag!'),
              React.createElement('h2', {}, 'This is h2 tag!')]    //this could be single child or array of children, like this we can create syblings
        )
    );
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);       
