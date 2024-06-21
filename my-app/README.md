1. Install **node.js**
   To Install node.js go nodejs.org -> Download Nodejs and install.
   To check In CMD Type Node -v
2. Install **NPM**
   To Install NPM in CMD Type npm install -g npm
   To check In CMD Type npm -v
3. Install **Ract app**
   cmd: npx create-react-app my-app
   check cmd: create react-app --vaersion
   cmd : npx create-ract-app <app name>
4. **Run** the **React app**
   cmd: cd my-app
   cmd: npm start
   if the react app cloned from git there is not have node module file so
   need to install npm frist then :
   cmd: npm start
5. **Contain** of **React app**
   React app have 3 folder
   1. node_module : Contain all the package or dependency.
   2. publiic : Contain Index.html
      Maniest.json
      images folder or file
   3. src : contain component folder
      Index.js
      app.js
      style.css
      and package.json
6. How **React app works**.

   1. The index.html is the main file that have a root div
      The root file coonnected with index.js file
   2. The index.js file have an app
      The app is connected with app.js file
   3. The app.js file have an div element
      The div contain all component
      and all component are connected with app.js file

7. **Component**:
   1. what is react component : Components are independent and reusable bits of code
   2. How to Make Cpmponent : Under the src folder make a folder as "component" &
      under the component folder create a file as your "componentname.js"
   3. The component file stucture : </br>
      `import React from "react";
function componentNameHere(){
    return(<div></div>
    )};
export default componentNameHere;`</br>
      to recive the component in app file :</br>
      `</"componentNameHere">`</br>
      We can add & change attribute with components like :</br>
      My componenet name card so </br>
      `<Card titleText= "This is title" descText="this is my description"/>`</br>
8. **props** & **destucturing** : </br>
We can recive attribute value by Props Like :</br>
`import React from "react";
function "componentNameHere"(props){
    return(<div> <h1 className="cardTitle">{props.titleText} </h1></div>      
)}
export default "componentNameHere";`</br>
We can check the props like:</br>
`console.logprops();`</br>
We can **Destucture** the multiple value to a single value like:</br>
`import React from "react";`
`function "componentNameHere"(props){
const {cardTitle, cardDesc}= props;
return(
   <div> <h1 className="cardTitle">{titleText}</h1></div>       
   )}`</br>
   `export default "componentNameHere";`</br>
  We can de-stucture an array like:</br>
  ` const petName= ["dog","cat", "cow"];
   const [dog,cat,cow]= petName; `</br>
  Also We de-stucture an **Nested array** like:
9. how to create data & add data with component :
   we can create data under src folder Like: **Data.json**
   json file have a pair of "key" : "value"; Like:</br>

   `[
    {
        "FirstName" : "Mohammad",
        "lastName" : "Ali"
    },
    {
        "class" : "seaven",
        "rool" : "21"
    }
]`</br>
   Import or add Data:</br>
   `import data from "./data.json";`

   check data:</br>
   `console.log(data);`

10. **Data mapping**
