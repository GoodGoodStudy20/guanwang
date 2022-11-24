<template>
  <div>
    <div class="imgvanner">
      <img src="../../../static/iamges/banner_02.png" alt="">
    </div>
    <span class="positionstyle">您的位置：共幸科技>产品中心><strong>{{positionNow}}</strong></span>
    <div class="main">
      <div class="LeftNavigation">
        <div class="LeftNavigationTitle">
          产品中心
          <span class="LeftNavigationSmallTitle">
            Products
          </span>
        </div>
        <div v-for="(item,index) in position" :key="item.id" @click="changeposition(index)">
          <div class="optionsList">
            <div class="optionsListItem">
              {{item.item}}
            </div>
            <div>
              <img :src="num==index?item.imgUrl1:item.imgUrl" alt="">

            </div>
          </div>
        </div>
      </div>
      <div class="Rightshow">
        <router-view></router-view>
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
      num: 0,
      position: [
        // {
        //   id: 1, item: '旧版九华保',
        //   imgUrl: '../../../static/iamges/icon_normal.png',
        //   imgUrl1: '../../../static/iamges/icon_selected.png'
        // },
        {
          id: 2, item: '智检车',
          imgUrl: '../../../static/iamges/icon_normal.png',
          imgUrl1: '../../../static/iamges/icon_selected.png'
        },
        {
          id: 3, item: '九华保',
          imgUrl: '../../../static/iamges/icon_normal.png',
          imgUrl1: '../../../static/iamges/icon_selected.png'
        }],
      positionNow: '智检车',

    };
  },
  computed: {

  },
  created() {
    if (this.$route.query.num !== undefined) {
      this.num = this.$route.query.num
    }
    console.log(this.$route.query.num)
  },
  mounted() {

  },
  watch: {
    '$route'(to, from) {
      if (this.$route.query.num !== undefined) {
        this.$router.go(0);

      }
    }

  },
  methods: {
    changeposition(index) {
      this.num = index
      if (index == 2) {
        this.positionNow = '旧版九华保'
        this.$router.push({ path: '/ProductCenter/Insurance' })
      } else if (index == 0) {
        this.positionNow = '智检车'
        this.$router.push({ path: '/ProductCenter/inspectaVehicle' })

      } else if (index == 1) {
        this.positionNow = '九华保'
        this.$router.push({ path: '/ProductCenter/vehicleRefueling' })

      }
    }
  },
  components: {

  },
};
</script>
<style scoped lang="scss" src="./index.scss">
</style>

