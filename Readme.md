### I'm MERN Stack developer, This repository consist both Backend and Frontend code of the assignment :smile: .

#### The working and deployed version of this project [web-app-link](https://dev-stack-balram.herokuapp.com/)

#### Rest API Documentation [Link](https://documenter.getpostman.com/view/10970931/T1DpDdDT?version=latest)

## **Back End Code**

Inside the main folder all the backend codes are available . This is the folder structure of backend code-:

- model
  - All Mongoose model schemas
- routes
  - All end points codes are here(routes folder)
- index.js file (main Source file)
- .env(which is not uploaded)

**Below code will run the server on local ip and port 5000**

```javascript
app.listen(PORT, "0.0.0.0", () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
```

**However if you want to run the server on localhost just replace the above code with the following code**

```javascript
app.listen(PORT, () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
```

For executing the backend server you have to execute the following codes-:

1. For installing all the necessary npm packages-

> \$ npm install

2. Start the server on development mode

> \$ npm run dev

3. It will launch the server on [http://[Your IP address]:5000](http://localhost:5000) this url.

## **Front End Code**

1.The Front End folder consist the react project. You can run it by running the below codes on the terminal for installing all the npm packages

> \$ npm install

2.for launching the website run below code

> \$ npm start

3.It will launch the website on [http://localhost:3000](http://localhost:3000) this url.
