import React, { Component } from 'react';
import CountHits from './CountHits';
import vegeta from './vegeta.png';

class Vegeta extends Component {
    
    render() {
        const {name, addOneHit, hocState, life}=this.props;
        const lifeValue= life > 0 ? (<td>{life} %</td>):(<td><span className = "badge badge-danger">Mort</span></td>);
        const Button = life > 0 ? (<button onClick={addOneHit} className="btn btn-success m-3">{name} frappe</button>)
                                :(<button className="btn btn-danger m-3 disabled">Mort</button>);
        
        return (
            <div className="col">
                <img src={vegeta} alt="vegeta"/> <br/>
                {Button}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                            <th scope="col">Vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            {lifeValue}
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountHits(Vegeta, 10);
