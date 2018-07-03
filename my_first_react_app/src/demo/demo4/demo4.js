import React from 'react';
import './demo4.css'
import $ from 'jquery'


class Demo4 extends React.Component{
    constructor(...args){
        super(...args);

        this.state={
            userList:[
                {
                    username:'豆子',
                    password:'1234',
                },
                 {
                    username:'豆子2',
                    password:'12345',
                },
            ],
            nowUserList:0,
        };
    }
    //挂载完成
    newAdd(){
        var defaultArr = [{
            username:'admin',
            password:'123'
        }]
        // alert('增加数据成功');
        this.setState({
            userList:this.state.userList.concat(defaultArr)
        })
    }

    //触发点击事件,保存当前的索引值
    getNowUserList(e){
        // console.log(e.target.getAttribute('data-idx'));
        let idx = e.target.getAttribute('data-idx');
        this.setState({
            nowUserList:idx,
        })
        //清除表单输入框的所有内容
        $('#changeUsername').val('');
        $('#changePsw').val('');
    }

    //点击保存函数
    changeUser(e){
        // console.log(this.state.nowUserList);
        
        let arrIdx = this.state.nowUserList;//获取数组的索引值        
        let userCont = $('#changeUsername').val(); //获取修改用户名的值
        // console.log('user:' + userCont);
        let pswCont = $('#changePsw').val();//获取密码
        // console.log('psw:' + pswCont);

        if(userCont !== '' && pswCont !== ''){
            let userListArr = this.state.userList;
            userListArr[arrIdx].username = userCont;
            userListArr[arrIdx].password = pswCont;
            //隐藏模态框
            $('#myModal').modal('hide')
            
            this.setState({
                userList:userListArr
            })


        }
        else{
            alert('选项不能为空!')
        } 

    }

    //删除用户列表
    deleteUserList(e){
        let detIdx = e.target.getAttribute('data-idx');
        console.log(detIdx);
        var userListArr = this.state.userList;
        userListArr.splice(detIdx,1)
        //删除后的数组
            //由于splice修改arrayObject的时候 返回的是删除的数组对象.但是会改变原数组,所以直接应用原数组即可
        // let detArr1 = this.state.userList.slice(0,detIdx);
        // let detArr2 = this.state.userList.slice(++detIdx);
        // let detArr = detArr1.concat(detArr2);
        // // console.log(detArr);
        
        this.setState({
            userList:userListArr,
        },function(){
            console.log(this.state.userList);
        })
    }


    //渲染
    render(){
        var keyId = 0;
        let userListMap = this.state.userList.map((item,index) => {
            return (
                <tr key={'userList' + keyId++}>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>
                        <input type="button" data-idx={index} data-toggle="modal" data-target="#myModal" className="btn btn-info" value="编辑" onClick={this.getNowUserList.bind(this)}/>
                        <input type="button" data-idx={index} className="btn btn-info" value="删除" onClick={this.deleteUserList.bind(this)} />
                    </td>
                </tr>
            )
        })

        return(
            <div className="demo4">
                <p>我是demo4,我来展现用户增删改查功能</p>

                <div className="demo4Cont">
                    <table className="table table-border">
                        <thead>
                            <tr>
                                <td>用户名</td>
                                <td>密码</td>
                                <td>管理</td>
                            </tr>
                        </thead>

                        <tbody>
                            {userListMap}
                        </tbody>

                        <tfoot>
                            <tr>
                                <td><input type="button" className="btn btn-primary" value="新增数据" onClick={this.newAdd.bind(this)} /></td>
                            </tr>
                        </tfoot>

                    </table>

                    
                    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <form id="saveChangeForm">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myModalLabel">编辑信息</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="changeUsername">用户名</label>
                                            <input type="text" className="form-control" id="changeUsername" placeholder="请输入修改用户名"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="changePsw">密码</label>
                                            <input type="password" className="form-control"  id="changePsw" placeholder="请输入修改密码"/>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                                        <button type="button" className="btn btn-primary" onClick={this.changeUser.bind(this)}>保存</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

export default Demo4;