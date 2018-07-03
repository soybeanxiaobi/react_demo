import React from 'react';



class Demo2 extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            cont:''
        };
    }
    fn(ev){
        // alert('change');
        this.setState({
            cont:ev.target.value
        })
    }
    render(){
        return (
            <div className="demo2">
                <span>我是demo2，通过状态展示键盘事件</span>
                <div className="demo2Cont">
                    <input type="text" onChange={this.fn.bind(this)} />
                    <span>输入内容:{this.state.cont}</span>
                </div>
            </div>
            
        )
    }
}

export default Demo2;