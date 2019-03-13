<template>
<div>
  <div @click="clickHandle">
     {{message}}
     {{message2}}
  </div>  

  <div @click="clickHanle2">
    xxxxxxxxx
  </div>
</div>


</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      message: 'Hello miniprograme',
      message2: 'msg2'
    }
  },

  methods: {
    clickHandle (ev) {
      this.message = 'sssss';
    },
    clickHanle2(){
      this.message2 = 'test';
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
