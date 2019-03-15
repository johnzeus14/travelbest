<template>
 
  <div>

    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>
   

        <div class="uk-navbar-left">
          <div>
            <a class="uk-navbar-item uk-logo" href="#">{{brand}}</a>
        </div>

        </div>

      <div class="uk-navbar-right">
          <div>
            

          
        <ul class="uk-navbar-nav">
            <li><router-link to="/"> 
              Home

            </router-link>
            </li>
            <li><router-link to="/"> 
              Packages

            </router-link>
            </li>
           <li><router-link to="/"> 
              Visa

            </router-link>
            </li>
             <li><router-link to="/"> 
              Contact us

            </router-link>
            </li>
           
           
            
            
            
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
      brand:'Travel Best',
    }
  },
methods :{

},
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// @import '../theme/theme.less';
</style>
