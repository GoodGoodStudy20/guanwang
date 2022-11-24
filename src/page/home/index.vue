<template>
<!-- 首页 -->
    <div>
     <div class="iamges">
      <img src="../../../static/iamges/banner_01.png" alt="">
  </div>  
      <!-- 业务范畴 -->
  <div class="business">
     <h1>业务范畴</h1>
      <span>定制开发推动您的业务迈向未来</span>
      <div class="BusinessType">
          <div class="platform">
             <div class="img">
               <div>
                    <img src="../../../static/iamges/icon_con_01.png" alt="">
               </div>
             </div>
             <h2>搭建平台</h2>
             <span>
               搭建和运营互联网服务平台，为保险行业客户提供售前、售中及售后服务，围绕车险行业，提供完整车险生态服务解决方案
             </span>
          </div>
          <div class="carbusiness">
             <div class="img">
               <div>
                    <img src="../../../static/iamges/icon_con_01.png" alt="">
               </div>
             </div>
             <h2>非车险业务</h2>
             <span>
              通过孵化行业项目，促进非车险2B行业生态产品、服务及运营创新
             </span>
          </div>
          <div class="Vehicle">
             <div class="img">
               <div>
                    <img src="../../../static/iamges/icon_con_01.png" alt="">
               </div>
             </div>
             <h2>车务服务</h2>
             <span>
           为客户提供数字化“智检车”代办年检、汽车延保等车后市场产品与服务，助力保险业车主服务升级转型
             </span>
          </div>
  </div>
  </div>
  <!-- 优势 -->
  <div class="advantage">
       <h1>我们的优势</h1>
      <span>专业+资金+服务</span>
      <div class="advantageBusinessType">
         <div class="security"  @mouseenter="entersecurity()" 
       ref="securityDOM"
       style="box-shadow:4px 4px 15px #666666;"
         >
           <div class="securitytop">
              <!-- <img src="../../../static/iamges/img_bg_01.png" alt=""> -->
              <span>安全稳健</span>
             </div>
           <div class="securitybottom">
             <div>
             多个子系统，可以灵活支持各种业务变化，自动化测试和部署，同时节省95％以上的维护人力成本，安全快捷稳健
             </div>
           </div>
         </div>
         <div class="Efficient"  
          @mouseenter="enterEfficient()"
       style="box-shadow:;"
       ref="EfficientDOM"
         >
            <div class="securitytop2">
              <span>专业高效</span>
            </div>
           <div class="securitybottom">
             <div>
               专业的方案、研发和售后团队共同支持合作，高效对接，高效落地
             </div>
           </div>
         </div>
         <div class="lead"
   @mouseenter="enterlead()"
       style="box-shadow:;"
       ref="leadDOM"
         >
            <div class="securitytop3">
               <span>行业领先</span>
            </div>
           <div class="securitybottom">
             <div>
               在线运营服务领域涉及全国，已建立多家分公司。服务于平安、人保、太保等TOP10
             </div>
           </div>
         </div>
      </div>
  </div>
  <!-- 合作伙伴 -->
   <div class="partner">
     <h1>合作伙伴</h1>
     <span>合作共赢,共幸科技携手合作伙伴共同成长</span>
     <div class="partnerList">
       <div class="partnerListItem">
         <img src="../../../static/iamges/atydz-f1i9t-001.png" alt="">
       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/a238a-y0q5k-002.png" alt="">
       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/ar6bm-uwtrf-003.png" alt="">
       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/img01.png" alt="">

       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/img02.png" alt="">

       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/img03.png" alt="">

       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/img04.png" alt="">

       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/img05.png" alt="">

       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/img06.png" alt="">

       </div>
       <div class="partnerListItem">
         <img src="../../../static/iamges/img07.png" alt="">

       </div>
     </div>
     </div>
     </div>
</template>
<script>
export default {
  components:{
  },
    props: {
    },
     data(){
          return{
    }
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
   entersecurity(){
       this.$refs.EfficientDOM.style.cssText=''
       this.$refs.securityDOM.style.cssText='box-shadow: rgb(102, 102, 102) 4px 4px 15px;'
   },
   enterEfficient(){
       this.$refs.securityDOM.style.cssText=''
       this.$refs.leadDOM.style.cssText=''
       this.$refs.EfficientDOM.style.cssText='box-shadow: rgb(102, 102, 102) 4px 4px 15px;'
   },
   enterlead(){
       this.$refs.EfficientDOM.style.cssText=''
       this.$refs.securityDOM.style.cssText=''
       this.$refs.leadDOM.style.cssText='box-shadow: rgb(102, 102, 102) 4px 4px 15px;'
   },
    }
};
</script>

<style scoped lang="scss" src="./index.scss">

</style>
