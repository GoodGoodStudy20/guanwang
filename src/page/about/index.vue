<template>
  <div>
    <div class="imgvanner">
      <img src="../../../static/iamges/banner_04.png" alt="">
    </div>
    <div class="main">
      <div class="LeftNavigation">
        <div class="LeftNavigationTitle">
          关于共幸
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
        <!-- 旧版九华保 -->
        <div class="Product">
          <div class="Producttop">
            <div class="ProductTItle">
              <h2>公司简介</h2>
            </div>

          </div>
          <div class="abouttxet">
            &nbsp;&nbsp;&nbsp;&nbsp;共幸科技（深圳）有限公司，成立于2019年3月，总部位于深圳前海，聚焦保险领域科技技术开发、推广及商业服务，通过专业+技术+资金，提供保险领域行业生态运营服务，为保险公司、保险中介公司以及保险营销员科技化转型、业务模式与服务升级赋能。<br /><br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;公司主要业务是搭建和运营互联网服务平台，为保险行业客户提供售前、售中及售后服务，围绕车险行业，提供完整车险生态服务解决方案；通过孵化行业项目，促进非车险2B行业生态产品、服务及运营创新；通过平台整合运营，为保险客户提供“智检车”代办年检、汽车延保等车主生态服务，通过提供定制产品、开发系统平台以及行销辅助工具，为保险营销员获客、产品营销与售后等提供服务支持。<br /><br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;公司运营领域涉及全国，已在湘、闽、云、贵、桂、皖、莞、佛晋等多省市建立和筹建分公司。公司初创人员为保险业高管和资深人事，拥有监管、行业协会、主体公司、中介公司、涉外保险机构等多方资源和工作履历，对保险业有深刻理解，能最大程度聚合资源、开辟蓝海市场，做富有内涵价值的保险科技、咨询服务公司。<br /><br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;青春就是无所畏惧的奔跑。共幸科技，互联网数字化、保险生态服务专家。
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
        id: 1, item: '公司简介',
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

