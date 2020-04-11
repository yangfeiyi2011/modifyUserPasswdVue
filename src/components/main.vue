<template>
  <div id="app">
			<h1>{{ message }}</h1>
			<image src='image/logo.png'></image><br>
			<p>用户名:<br>
			<input v-model="username" placeholder="请输入用户名">
			<p>旧密码:<br>
			<input type="password" v-model="oldpasswd" placeholder="请输入旧密码">
			<p>新密码:<br>
			<input type="password" v-model="newpasswd" placeholder="请输入新密码"></p>
			<button v-on:click="changePasswd">提交</button>
			<p>如果您点击提交，密码将会被立即修改。</p>
		</div>
</template>

<script>
import {request} from './axios'
export default {
  name: 'app',
  data () {
    return {
      message: 'Opengrok密码修改系统!',
      username: '',
      oldpasswd: '',
      newpasswd: '',
      user: ['yangfei', 'wangbin', 'liqiang']
    }
  },
  methods: {
    changePasswd: function(){
      this.checkoutUser()
      // let checkoutResult = this.checkoutUser()
      // if (checkoutResult == 0) {
      //   alert("用户名或密码错误，请重新输入！")
      // } else if(checkoutResult == 1) {
      //   const usermessge = {
      //     username: this.username,
      //     oldpasswd: this.oldpasswd,
      //     newpasswd: this.newpasswd
      //   }
      //   // console.log(this.usermessage)
      //   alert(usermessge.username+':密码修改成功')
      // } else {
      //   alert('服务器请求失败，请重试！')
      // }
    },
    checkoutUser() {
      request({
        url:'/url',
        method: 'GET',
      }).then(res => {
        console.log(res)
        const userMessage = res.data
        if (userMessage[this.username] == this.oldpasswd){
          if (this.oldpasswd == this.newpasswd){
            alert("新旧密码不能相同或不能为空！")
          } else {
            request({
              url:'/url',
              method: 'POST',
              data: {
                name: this.username,
                passwd: this.newpasswd
              }
              }).then(res =>{
                console.log(res)
                alert(this.username+':密码修改成功')
              }).catch(err => {
                console.log(err)
                alert("修改密码失败！")
              })
          }
        } else {
          alert("用户名或密码错误，请重新输入！")
        }
        // for (key in userMessage){
        //   console.log(key + '---' + userMessage[key])
        // }
      }).catch(err => {
        console.log(err)
        alert('服务器请求失败，请重试！')
      })
      // let result = this.user.indexOf(this.username)
      return -1
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
