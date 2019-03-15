<template>
 
  <div id="packages" class="uk-section" >
  
    <div class="uk-container">
      <h1 class="uk-text-center"> Adventure Trips </h1>
<!-- 
      the slider section -->
      


      <div class="uk-position-relative uk-visible-toggle uk-light uk-padding" tabindex="-1" uk-slider="autoplay:true; autoplay-interval: 3000;">

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-1@s uk-child-width-1-4@m" >
        <li v-for= "packs in packs">
          <div class="uk-card">
            <div class="uk-card-media-top">
                <img :src="packs.images" alt="" class="uk-height-medium">
                  <div class="uk-overlay uk-light uk-position-center">
                <h1 class="uk-text-center uk-text-uppercase uk-text-bold ">{{packs.name}}</h1>
            </div>
                  
            
          </div>
        

          </div>
        
            
        </li>
    
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>


     <!--  end of slider section -->
    </div>
  
  </div>
</template>


  
<script>



export default {
  data(){
    return{
     packs :[
      {
        images:'/img/visa/japan.jpg',
        name:"Japan"
      },
       {
        images:'/img/visa/australia.jpg',
         name:"Australia"
      },
       {
        images:'/img/visa/dubai.jpg',
         name:"Dubai"
      },
       {
        images:'/img/visa/newyork.jpg',
         name:"NewYork"
      },
        {
        images:'/img/visa/southafrica.jpg',
         name:"SouthAfrica"
      },
        {
        images:'/img/visa/kenya.jpg',
         name:"Kenya"
      },


     ]
    }
  },
methods :{

},
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// @import '../theme/theme.less';

.uk-section{
  .uk-container {
    h1 {
      font-family: 'Montserrat', sans-serif;
    }
  }
}
</style>
