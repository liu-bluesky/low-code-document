<template>
  <div class="vue-qrcode-box">
        <div class="aic jca">
         <el-card class="mx">
        <img src="./img/index1.png" alt="" srcset="">
        <div style="padding: 14px">
          <span>容错级别 0-3</span>
          <div>
              当前级别0
          </div>
        </div>
      </el-card>
      <el-card class="mx">
        <img src="./img/index2.png" alt="" srcset="">
        <div style="padding: 14px">
          <span>容错级别 0-3</span>
          <div>
              当前级别1
          </div>
        </div>
      </el-card>

      <el-card class="mx">
        <img src="./img/index3.png" alt="" srcset="">
        <div style="padding: 14px">
          <span>容错级别 0-3</span>
          <div>
              当前级别2
          </div>
        </div>
      </el-card>
        <el-card class="mx">
        <img src="./img/index4.png" alt="" srcset="">
        <div style="padding: 14px">
          <span>容错级别 0-3</span>
          <div>
              当前级别3
          </div>
        </div>
      </el-card>
        </div>    
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.fd,.aic,.jcc,.jcb,.jca,.fdc,.jcfend{
    display: flex;
}
.aic{
align-items: center;
}
.jcc{
    justify-content: center;
}
.jcb{
    justify-content: space-between; 
}
.jca{
    justify-content: space-around; 
}
.mx{
    margin: 0 5px;
}
</style>