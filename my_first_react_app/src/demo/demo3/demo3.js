import React from 'react';

class Demo3 extends React.Component{
    constructor(...args){
        super(...args);
        this.state={changeDis:'block'}
    }

    changeDisFn(){
        this.setState({
            changeDis:this.state.changeDis === 'block' ?  'none' : 'block'
        })
    }
    render(){
        return (
            
            <div className="demo3" >
                我是demo3,展示点击显示隐藏效果
                <div className="demoCont" style={{textAlign:'center'}} onClick={this.changeDisFn.bind(this)} >
                    <input type="button" value="显示隐藏" />
                    <div className="box" style={{width:'200px',height:'200px',backgroundColor:'#f9b041',margin:'20px auto',display:this.state.changeDis}}></div>
                </div>
            </div>
        )
    }
};

export default Demo3;