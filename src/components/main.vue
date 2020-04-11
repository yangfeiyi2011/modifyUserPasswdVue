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
import {execute} from './cmd.js'
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
      let checkoutResult = this.checkoutUser()
      console.log(checkoutResult)
      if (checkoutResult == -1) {
        alert("用户名或密码错误，请重新输入！")
      } else {
        const usermessge = {
          username: this.username,
          oldpasswd: this.oldpasswd,
          newpasswd: this.newpasswd
        }
        // console.log(this.usermessage)
        alert(usermessge.username+':密码修改成功')
      }
    },
    checkoutUser() {
      let result = execute('echo');
      // let result = this.user.indexOf(this.username)
      return result
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
