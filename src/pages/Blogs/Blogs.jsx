import React from 'react';
import useTitle from '../../hook/useTitle';

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div>

            <div className='w-10/12 lg:w-8/12 mx-auto mb-12'>
                <div className='w-[96%] mx-auto'>
                    <h2 className='text-4xl font-bold text-center text-sky-400 mb-12'>Questions</h2>
                    <div className='rounded-md drop-shadow-2xl bg-purple-500 border-2 p-6 '>
                        <h2 className='text-2xl'> <span className='font-bold text-sky-500'>Question-1: </span> What is an access token and refresh token? </h2>
                        <hr />

                        <p className='text-bold text-white py-2'>
                          Access Token
                        </p>
                        <p className=''>
                            An access token is a credential that is issued by an authentication server upon successful authentication of a user or an application. It represents the authorization granted to access specific resources or perform certain actions within a system. Access tokens are usually time-limited and have an expiration time after which they become invalid.
                        </p>
                        <p className='text-bold text-white py-2'>
                          Refresh Token
                        </p>
                        <p className=''>
                            A refresh token is also issued by the authentication server but serves a different purpose. While access tokens have a limited lifespan, refresh tokens are long-lived tokens that are used to obtain new access tokens when the existing ones expire.
                        </p>

                        <h2 className='text-2xl pt-2'> <span className='font-bold text-white'>How do they work and where should we store them on the client-side? </span>  </h2>
                        <p className='my-2'>
                            An access token works When a user or application wants to access a protected resource, it presents the access token to the system. The system then verifies the token's validity and checks if the associated permissions allow the requested action. If the access token is valid and authorized, the system grants access to the requested resource.
                        </p>
                        <p>
                            When an access token expires, instead of re-authenticating the user or application, a refresh token can be presented to the authentication server to obtain a new access token. This process is known as token refreshing or token rotation. Refresh tokens are typically kept securely on the client-side and are exchanged for a new access token without requiring the user to re-enter their credentials
                        </p>

                    </div>



                    <div className='rounded-md drop-shadow-2xl bg-purple-500 border-2 p-6 my-3'>
                        <h2 className='text-2xl'> <span className='font-bold text-sky-500'>Question-2: </span> Compare SQL and NoSQL databases?</h2>
                        <hr />
                        <p className='mt-3 mb-10'>
                            SQL databases use a structured data model with predefined schemas, while NoSQL databases employ various data models, providing more flexibility in data representation. SQL databases use SQL as the standard query language, while NoSQL databases may have different query languages specific to their data model. SQL databases scale vertically by adding more resources to a single server, while NoSQL databases are designed for horizontal scalability across multiple servers. SQL databases have rigid schemas, requiring schema alterations for any changes, whereas NoSQL databases offer schema flexibility, accommodating dynamic or unstructured data. SQL databases provide strong transactional support, while NoSQL databases vary in their transactional capabilities. SQL databases are suitable for complex queries, strict data consistency, and structured data, while NoSQL databases excel in handling large-scale, rapidly changing, and unstructured data.
                        </p>
                    </div>



                    <div className='rounded-md drop-shadow-2xl bg-purple-500 border-2 p-6 mb-3 '>
                        <h2 className='text-2xl'> <span className='font-bold text-sky-500'>Question-3: </span> What is express JS and  What is Nest JS? </h2>
                        <hr />
                        <p className='text-bold text-white py-2'>
                            What is express JS?
                        </p>
                        <p className='mb-2'>
                            Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a minimalistic set of features. With its routing, middleware, template engine support, and error handling capabilities, Express.js allows developers to create server-side applications quickly and efficiently.
                        </p>

                        <p className='text-bold text-white'>
                            What is Nest JS?
                        </p>
                        <p>
                            NestJS is a scalable and extensible web application framework for Node.js, built with TypeScript or JavaScript. It promotes a modular architecture, uses dependency injection, and provides decorators for defining routes, middleware, and more. With its powerful features, NestJS simplifies the development of server-side applications and encourages best practices for building scalable and maintainable code.</p>
                    </div>


                    <div className='rounded-md drop-shadow-2xl bg-purple-500 border-2 p-6'>
                        <h2 className='text-2xl'> <span className='font-bold text-sky-500'>Question-4: </span> What is MongoDB aggregate and how does it work </h2>
                        <hr />
                        <p className='mt-3 mb-10'>

                        MongoDB aggregate method is a powerful feature that allows users to perform advanced data aggregation operations on collections of documents. It works by defining a pipeline of stages, each representing a specific operation to be performed on the input documents. The pipeline stages can include operations such as filtering, sorting, grouping, projecting fields, and performing mathematical computations. The documents flow through the stages sequentially, with the output of one stage serving as the input for the next. This enables users to transform and manipulate data in a flexible and efficient manner. The aggregate method leverages the document-oriented nature of MongoDB, enabling complex operations such as nested document traversal, array manipulations, and joining data from multiple collections. It provides a powerful tool for deriving insights and performing complex data analysis within MongoDB.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blogs;