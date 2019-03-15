<template>
  <div class="nav">

    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
         <nav class="uk-navbar-container"uk-navbar>
       

            <div class="uk-navbar-left">
             <div>
              
            <ul class="uk-navbar-nav">
                <li><router-link to="/profile">  <svgicon icon = "messenger" height="23" width = "30" color = "white">  </svgicon> </router-link> </li>
               
            </ul>

            </div>

          </div>


        
            
            <div class="uk-navbar-center">
        
            <div>
                <a class="uk-navbar-item uk-logo" href="#">{{brand}}</a>
            </div>

        


          </div>

          <div class="uk-navbar-right">
              <div>
              
            <ul class="uk-navbar-nav">
                <li><router-link to="/">  <svgicon icon = "phone" height="23" width = "30" color = "white">  </svgicon> </router-link> </li>
               
            </ul>

            </div>

        </div>
          

      </nav>
</div>
  </div>
</template>

<script>


export default {
  data(){
    return{
      brand:'Travel Planner',
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../theme/theme.less';

@logo-font-size: 20px;


.hook-navbar-container() {
  padding-left:20px;
  padding-right:20px;
  margin-right: auto;
  margin-left: auto;

}


</style>
