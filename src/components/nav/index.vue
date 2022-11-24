<template>
  <div>
    <!-- 头部 -->
    <div class="herad">
      <div class="herad-left">
        <!-- 彩色LOGO -->
        <div class="herad-leftimg" @click="gotoHome">
          <img src="../../../static/iamges/ayqu2-63t1z-002.png" alt="">
        </div>
      </div>
      <div class="herad-right">
        <ul>
          <li v-for="(item,index) in items" :key="index" :class="{active:currentIndex === index}" @click="clickLi(index)">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      items: ['首页', '产品中心', '服务与支持', '关于共幸'],
      currentIndex: localStorage.getItem('currentIndex') * 1
    };
  },
  computed: {

  },
  created() {
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    gotoHome() {
      this.$router.push({ path: '/home' });

      localStorage.setItem('currentIndex', 1)
      this.currentIndex = localStorage.getItem('currentIndex') * 1 - 1
      console.log(this.currentIndex)
    },
    clickLi(index) {
      localStorage.setItem('currentIndex', index)
      this.currentIndex = localStorage.getItem('currentIndex')
      this.currentIndex = this.currentIndex * 1
      if (this.currentIndex == 0) {
        this.$router.push({ path: '/home' });
      } else if (this.currentIndex == 1) {
        this.$router.push({ path: '/ProductCenter' });
      } else if (this.currentIndex == 2) {
        this.$router.push({ path: '/Service' });
      } else if (this.currentIndex == 3) {
        this.$router.push({ path: '/about' });
      }
    }
  },
  components: {

  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .herad-left {
    width: 30% !important;
    height: 100% !important;
  }
  .herad-right {
    float: right;
    width: 70% !important;
    height: 100% !important;
  }
  .herad {
    font-size: 23px !important;
    height: 70px !important;
    background: #ffffff;
  }
  .active:after {
    bottom: -10px !important;
  }
}

body,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
.herad {
  width: 100%;
  min-width: 1200px;
  height: 70px;
  text-align: center !important;
  background: #ffffff;
}
.herad-left {
  align-items: center;
  z-index: 999;
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  .imge-left {
    position: absolute;
    width: 155px;
    height: 100%;
    background: red;
    left: 30%;
  }
  .imge-right {
    position: absolute;
    width: 155px;
    height: 100%;
    background-color: #020202;
    left: 46%;
  }
}
.herad-right {
  float: right;
  width: 50%;
  height: 100%;
}
.herad-right ul {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
  align-items: center;
}

.herad-right li {
  cursor: pointer;
  margin-left: 80px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #020202;
}
.active {
  color: #f60606 !important;
  //    border-bottom: 4px solid #F60606;
  position: relative;
}
.active:after {
  content: " ";
  width: 18px;
  height: 4px;
  border-radius: 4px;
  background: red;
  position: absolute;
  bottom: -10.6px;
  left: 49%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.herad-leftimg {
  cursor: pointer;
  height: 100px;
  width: 180px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
