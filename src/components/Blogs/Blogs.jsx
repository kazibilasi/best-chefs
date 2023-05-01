import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto bg-slate-300 mt-6 rounded-md'>
            <div className=' p-6'>
                <div className='mt-5 p-4 bg-slate-50 rounded-md'>
                    <h1 className='text-xl font-medium'>1.What's  the differences between uncontrolled and controlled components?</h1>
                    <p>
                        In brief, controlled components are components that are controlled by React and keep their values in sync with the component state, while uncontrolled components do not rely on the component state and allow the form data to be managed by the DOM. Controlled components make it easier to perform form validation and provide more control over the form data, while uncontrolled components require less code.</p>
                </div>
                <div className='mt-5 p-4 bg-slate-50 rounded-md'>
                    <h1 className='text-xl font-medium'>2.How to validate React props using PropTypes?</h1>
                    <p>
                        Import PropTypes at the top of the component file.

                        Define the expected prop types in the component, specifying if they are required or optional, and their data type.

                        When a component is rendered with props that don't match the expected data type, a warning will be displayed in the console.</p>
                </div>
                <div className='mt-5 p-4 bg-slate-50 rounded-md'>
                    <h1 className='text-xl font-medium'>3.What's the difference between nodejs and express js?</h1>
                    <p>
                        Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side. It provides a runtime environment for building server-side applications, including web applications.

                        Express.js, on the other hand, is a web framework for Node.js that provides a set of tools and libraries for building web applications. It provides a layer of abstraction on top of Node.js, making it easier to build web applications and APIs.</p>
                </div>
                <div className='mt-5 p-4 bg-slate-50 rounded-md'>
                    <h1 className='text-xl font-medium'>4.What is a custom hook, and why will you create a custom hook?.</h1>
                    <p>
                    A custom hook is a reusable piece of code that allows you to share logic between React components. Custom hooks are functions that use React hooks to manage state, handle side effects, or provide other functionality that can be shared across components.</p>

                    custom hooks are a powerful tool for sharing functionality between components in a modular and reusable way, making it easier to write and maintain complex React applications.

                    that's why i will use it.
                </div>
            </div>
        </div>
    );
};

export default Blogs;