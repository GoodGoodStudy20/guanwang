<template>
  <div class="box">
    <div class="ProductCente" style="color: #ffff;" @mouseenter="ProductCente()" ref="ProductCenteDOM">
      <h3>产品中心</h3>
      <ul>
        <!-- <li class="jiuhuabaohover" @click="jiuhuabao" ref="ProductCenteDOM">旧版九华保</li> -->
        <li class="zhijieche" @click="zhijianche" ref="ProductCenteDOM">智检车</li>
        <li class="weilaiyouni" @click="weilaiyouni" ref="ProductCenteDOM">九华保</li>
      </ul>
    </div>
    <div class="contactus" style="color:" @mouseenter="contactus()" ref="contactusDOM">
      <h3>联系我们</h3>
      <div>
        地址：深圳市南山区科技园九洲电器大厦B座5G<br />
        客服电话：400-6310-818
      </div>
    </div>
    <div class="code">
      <div class="logo">
        <img src="../../../static/iamges/logo_b@2x.png" alt="">
      </div>
      <div class="codecode">
        <img src="../../../static/iamges/foot_erweim.png" alt="">
      </div>
    </div>

    <div class="statement">
      Copyright @ 2021 共幸科技（深圳）有限公司 <a href="https://beian.miit.gov.cn" target='_blank'>粤ICP备20066053号</a>
    </div>
  </div>
</template>
<script>
export default {

  methods: {
    jiuhuabao() {
      this.$router.push({
        path: "/ProductCenter/Insurance",
        query: { num: 0 }
      })
    },
    zhijianche() {
      this.$router.push({        path: '/ProductCenter/inspectaVehicle',
        query: { num: 0 }      })
    },
    weilaiyouni() {
      this.$router.push({        path: '/ProductCenter/vehicleRefueling',
        query: { num: 1 }      })
    },
    ProductCente() {
      this.$refs.ProductCenteDOM.style.cssText = 'color: #ffff;'
      this.$refs.contactusDOM.style.cssText = ''
    },
    contactus() {
      this.$refs.ProductCenteDOM.style.cssText = ''
      this.$refs.contactusDOM.style.cssText = 'color: #ffff;'
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .ProductCente {
    width: 200px !important;
  }
  .contactus {
    width: 200px !important;
  }
  .ProductCente ul li {
    color: #fff !important;
  }
  .contactus div {
    color: #fff !important;
  }
  .contactus {
    color: #fff !important;
  }
}
.box {
  width: 100%;
  height: 367px;
  background: #2e3033;
  background: #2e3033;
  position: relative;
}
li {
  list-style: none;
}
.ProductCente {
  width: 300px;
  height: 250px;
  position: absolute;
  bottom: 77px;
  left: 18%;
  color: #808080;
  h3 {
    border-bottom: 1px solid;
    height: 45px;
  }
  ul {
    cursor: pointer;
    padding: 0;
    height: 72px;
    li {
      font-size: 8px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #808080;
      line-height: 24px;
    }
  }
}
.code {
  width: 300px;
  height: 250px;
  position: absolute;
  bottom: 77px;
  left: 66%;
  .logo {
    width: 168px;
    height: 44.8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .codecode {
    width: 168px;
    padding-top: 50px;
    height: 100%;
  }
}
.contactus {
  width: 300px;
  height: 250px;
  position: absolute;
  bottom: 77px;
  left: 40%;
  color: #808080;
  h3 {
    border-bottom: 1px solid;
    height: 45px;
  }
  div {
    color: #808080;
    height: 55px;
    line-height: 32px;
    font-size: 14px;
  }
}
.statement {
  position: absolute;
  bottom: 8%;
  left: 40%;
  color: #808080;
  font-size: 12px;
  a {
    color: #808080;
  }
}
.jiuhuabaohover:hover {
  color: #fff;
}
.zhijieche:hover {
  color: #fff;
}
.weilaiyouni:hover {
  color: #fff;
}
</style>