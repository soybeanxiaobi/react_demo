import React from 'react';
import { BrowserRouter as Router,Link,Route} from 'react-router-dom';
import './button.css'

/**
 * 引入demo
 */
import demo2 from './demo2/demo2'
import demo3 from './demo3/demo3'
import demo4 from './demo4/demo4'

class Button extends React.Component{
    render(){
        return (
            <Router>
                <div className="btnWried" style={{textAlign:'center'}}>
                    <span className="demoButton"> 
                        <Link activestyle={{color:'#12b7f5'}} to="/demo1" >demo1</Link>
                    </span>
                    <span className="demoButton">
                        <Link activestyle={{color:'#12b7f5'}} to="/demo2">demo2</Link>
                    </span>
                    <span className="demoButton">
                        <Link  activestyle={{color:'#12b7f5'}} to="/demo3">demo3</Link>
                    </span>
                    <span className="demoButton">
                        <Link activestyle={{color:'#12b7f5'}} to="/demo4">demo4</Link>
                    </span>
                    
                    <Route path="/demo2" component={demo2} />
                    <Route path="/demo3" component={demo3} />
                    <Route path="/demo4" component={demo4} />

                </div>
            </Router>
        );
    }
}
export default Button;