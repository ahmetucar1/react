import React from 'react';
import ReactDOM  from 'react-dom';

import Card from './components/Card';
import Collapse from './components/Collapse';
import İmageGs from './images/gs.jpg';
import İmageFb from './images/fb.jpg';
import İmageBjk from './images/bjk.jpg';


function App() {
    return (
        <div className="container">

            <div className="row m-1">

               <div className="card-group w-100"> 

                <div className="col m-2">

                <Collapse
                  href="collapseExample">
                <Card 
                  cardTitle="Galatasaray"
                  cardText="Galatasaray Türkiye'nin en iyi takımıdır." 
                  updateTime="1 dakika önce"
                  cardImg={İmageGs}/>
                </Collapse>

                 </div>

                 <div className="col m-2">

                <Collapse
                  href="collapseExample2">
                <Card 
                  cardTitle="Fenerbahçe"
                  cardText="Fenerbahçe Türkiyenin en iyi 2. takımıdır." 
                  updateTime="2 dakika önce"
                  cardImg={İmageFb}/>
                </Collapse>

                  </div> 

                  <div className="col m-2">

                <Collapse
                  href="collapseExample3">
                <Card 
                  cardTitle="Beşiktaş"
                  cardText="Beşiktaş Türkiyenin en iyi 3. takımıdır." 
                  updateTime="2 dakika önce"
                  cardImg={İmageBjk}/>
                </Collapse>

                 </div>

                </div>
            </div>    
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root') //document.querySelector('#root)
);






/* function App() {

    const str1 = "Click"
    const str2 = "Me"; 

    return (
        <div>
           
           <button type='button' style={{padding: '10px', color: 'white', backgroundColor: 'blue', border: '2px solid yellow'}}>{str1.concat( " ", str2)}</button>
             
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root') //document.querySelector('#root)
);
 */



/* const names = ["Mehmet", "Mahmut", "Mustafa"]

function App() {
    return (
        <div>
            {names.map(name => (<h1> {name} </h1>))}

           <ul>
              <li>Ayşe</li>
              <li>Fatma</li>
           </ul>
             
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root') //document.querySelector('#root)
); */

/* class App2 extends React.Component  {
    render () {
        return <h2>Ben classla oluşturuldum</h2>
    }
}

ReactDOM.render(
    <App2 />,
    document.getElementById('root2')
) */
