## 演示效果
<VueQrDiY />

## 示例代码
```html
  <div class="">
    <div class="aic jca">
         <el-card>
        <vue-qr
          text="Hello world!"
          :size="200"
          :correctLevel="0"
        ></vue-qr>
        <div style="padding: 14px">
          <span>容错级别 0-3</span>
          <div>
              当前级别0
          </div>
        </div>
      </el-card>
      <el-card>
        <vue-qr
          text="Hello world!"
          :size="200"
            :correctLevel="1"
        ></vue-qr>
        <div style="padding: 14px">
          <span>容错级别 0-3</span>
          <div>
              当前级别1
          </div>
        </div>
      </el-card>

      <el-card>
        <vue-qr
          text="Hello world!"
          :size="200"
          :correctLevel="2"
        ></vue-qr>
        <div style="padding: 14px">
          <span>容错级别 0-3</span>
          <div>
              当前级别2
          </div>
        </div>
      </el-card>
        <el-card>
        <vue-qr
          text="Hello world!"
          :size="200"
          
          :logoSrc="src2"
          :correctLevel="3"
        ></vue-qr>
        <div style="padding: 14px">
          <span>容错级别 0-3</span>
          <div>
              当前级别3
          </div>
        </div>
      </el-card>
           
    </div>
  </div>
```

## 安装插件

```shell
npm install vue-qr --save
yarn  add vue-qr
```
### 引入
```js
// vue2.0
import VueQr from 'vue-qr'

// vue3.0 (support vite)
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
new Vue({
    components: {VueQr}
})
```