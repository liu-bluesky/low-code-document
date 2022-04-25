"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[512],{7826:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3e77df02",path:"/page/component/editmd.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"Editjs 属性",slug:"editjs-属性",children:[]},{level:2,title:"Editjs 方法",slug:"editjs-方法",children:[]}],filePathRelative:"page/component/editmd.md",git:{updatedTime:1639557021e3,contributors:[{name:"liu-bluesky",email:"229236940@qq.com",commits:1}]}}},7620:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(6252);const p=(0,t.uE)('<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editjs</span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.option<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@handleRun</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRun<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#component</span><span class="token punctuation">&gt;</span></span>\n         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echartsMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mainChina<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Editjs</span><span class="token punctuation">&gt;</span></span>\n   \n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> nextTick<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&quot;echarts&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">/*\n基本数据类型\n引用数据类型（复杂类型） 个人建议 ref初始化变量 \nref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, \nref定义的数据访问的时候要多一个.value\n*/</span>\n<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  option<span class="token operator">:</span>  <span class="token punctuation">{</span>\n      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>\n        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      series<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> echartsMapel<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">let</span> opt<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">echartsMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>echartsMapel<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">init</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>echartsMapel<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">setOption</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dataObj<span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> opt <span class="token operator">=</span>   myChart<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>opt<span class="token punctuation">,</span>dataObj<span class="token punctuation">)</span>\n     myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>opt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> setOption\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">handleRun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n  <span class="token function">opt</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n   opt <span class="token operator">=</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">#mainChina</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="editjs-属性" tabindex="-1"><a class="header-anchor" href="#editjs-属性" aria-hidden="true">#</a> Editjs 属性</h2><table><thead><tr><th>属性名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>演示的组件名字</td></tr><tr><td>option</td><td>Object</td><td>演示组件的参数对象</td></tr></tbody></table><h2 id="editjs-方法" tabindex="-1"><a class="header-anchor" href="#editjs-方法" aria-hidden="true">#</a> Editjs 方法</h2><table><thead><tr><th>方法名</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>handleRun</td><td>编辑后返回的json对象</td><td>用户点击运行后触发</td></tr></tbody></table>',6),e={},o=(0,a(3744).Z)(e,[["render",function(n,s){const a=(0,t.up)("EchartsDemo");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(a),p],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);