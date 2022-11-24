<template>
  <div>
    <div class="imgvanner">
      <img src="../../../static/iamges/banner_03.png" alt="">
    </div>
    <div class="main">
      <div class="LeftNavigation">
        <div class="LeftNavigationTitle">
          服务与支持
        </div>
        <div v-for="(item,index) in position" :key="item.id">
          <div class="optionsList">
            <div class="optionsListItem">
              {{item.item}}
            </div>
            <img :src="num==index?item.imgUrl1:item.imgUrl" alt="">
          </div>
        </div>

      </div>
      <div class="Rightshow">
        <div class="images">
          <img src="../../../static/iamges/bg.png" alt="">
        </div>
        <!-- 旧版九华保 -->
        <div class="Product">
          <div class="Producttop">
            <div class="ProductTItle">
              <h2>产品介绍</h2>
            </div>
          </div>
          <div class="Productbottom">
          </div>
        </div>

        <div class="ProductcontnetNo1">

          <div class="ProductTextNo1">
            公司一贯遵循“客户至上，竭诚服务”的经营原则，建立了完善的、一流的质量保证和运维服务体系，并在在湘、闽、云、贵、桂、皖、莞、佛晋等多省市配备经验丰富的服务团队，提供专业及时技术支持以及产品运维服务。
          </div>
        </div>

        <div class="Productcontnet">
          <div class="ProductTItle">
            <h3>7x24小时电话服务</h3>
          </div>
          <div class="ProductText">
            用户在业务执行过程中发生问题都可以立即拨打热线电话进行问题反馈，热线服务人员会根据问题类型确定合理的解决方案。
          </div>
        </div>
        <div class="Productcontnet">
          <div class="ProductTItle">
            <h3>现场支持</h3>
          </div>
          <div class="ProductText">
            委派专业工作人员现场协助用户处理故障，快速的服务响应与技术、系统开发支持服务，提高工作效率。
          </div>
        </div>

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
      position: [{
        id: 1, item: '服务热线',
        imgUrl: '../../../static/iamges/icon_normal.png',
        imgUrl1: '../../../static/iamges/icon_selected.png'
      },
      ],
      positionNow: '旧版九华保',

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

  },
  components: {

  },
};
</script>
<style scoped lang="scss" src="./index.scss">
</style>

