<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">GABS<i class="fas fa-bus"></i></span>
      <ul class="nav nav-pills justify-content-end">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  
<div class="container">
   
   <div class="about">
      <div class="left">
         <h1>About us</h1>
         <hr>
         <p>Golden Arrow Bus Services (GABS) is the major public transport bus service operator for Cape Town, South Africa, providing commuter bus services throughout a large part of the City of Cape Town metropolitan area.

Founded in 1861, and owned by South African holding company Hosken Consolidated Investments Limited, the company operates a fleet of over 1000 buses on 1300 routes, with a daily ridership of around 220,000 people.</p>

                  <p>In 2021 Golden Arrow Bus Services (GABS) celebrated 160 years of providing road based public transport to the community of Cape Town. The company is in its present form the culmination of an unbroken chain of mergers and acquisations. It is uniquely positioned as one of a few privately owned companies that have provided public transport services in a South African metropolitan environment.
Since its acquisition in 2018, Golden Arrow Bus Services, is a wholly owned subsidiary of Frontier Transport Holdings. Golden Arrow has, in all its forms, over the period of its 160 year history, continued to keep the bus service operational in order to provide the people of Cape Town with safe,affordable and reliable bus service while simultaneously contributing to the economy of the metropole and being a responsible corporate citizen.
Since 2013 Golden Arrow has taken its place as an official vehicle operating company (VOC) for the city of Cape Town's MyCiTi service. Through its subsidiary, Table Bay Rapid Transit(TBRT) it operates the Trunk service the Atlantic corridor from Table View to the CBD, as well as services from the CBD to Sea Point to Camps Bay.</p>

      </div>
      <div class="right">
         <img src="https://i.postimg.cc/K855CFVL/about-1.jpg">
      </div>
      <div class="clear"></div>
   </div>
   
   
   
   <div class="mission">
     
      <div class="left">
         <img src="https://res.cloudinary.com/arpr/image/upload/v1540359700/adult-affection-baby-755028.jpg">
      </div>
        <div class="right">
         <h1>Mission Statement</h1>
         <hr>
         <p>Delivery of safe and reliable scheduled passenger transport. Staff satisfaction, upskilling and other employee benefits. Investment in the community through projects and monetary donations.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </div>
    
      
   </div>
</div>
</template>

<script>
export default {};
</script>

<style>



.container{
   width:100%;
   
}
.container h1{
   font-size:50px
}
.about{
   padding:5% 0;
   width:100%;
   
   background-color:#fff;
}
.about .left{
   padding:2%;
   width:50%;
   display:inline-block;
}
.about .right{
   width:50%;
   display:inline-block;
}
.about .right img{
   width:100%;
   margin-top: -160%;

}
.about .left h1{
   text-align:center;
   color:goldenrod;
   margin:0 0 10px 0;
}
.about .left hr{
   width:20%;
   border-top:7px solid #fd7e14;
   border-bottom:none;
   margin-left: 250px;
}
.about .left p{
   font-size:1rem;
   margin:40px auto;
   width:80%
}

.mission{
   padding:5% 0;
   width:100%;
   height:auto;
   background-color:#fff;
}
.mission .right{
   padding:2% 0;
   width:50%;

   display:inline-block;
}
.mission .left{
   
   width:50%;

   display:inline-block;
}
.mission .left img{
   width:100%;
   margin-bottom: 120%;
}
.mission .right h1{
   text-align:center;
   color:goldenrod;
   margin:0 0 20px 0;
}
.mission .right hr{
   width:35%;
  border-top:7px solid #fd7e14;
   border-bottom:none;
   margin-left: 35%;
}
.mission .right p{
   font-size:1rem;
   margin:40px auto;
   width:80%
}








/* media */
@media(max-width:1200px){
   .mission .right p{
      font-size:.8rem;
      margin:20px auto;
   }
   .about .left p{
      font-size:.8rem;
      margin:20px auto;
   }
}
@media(max-width:992px){
   .about .left{
   width:100%; 
}
   .about .right{
   width:100%; 
}
      .mission .left{
   width:100%; 
}
   .mission .right{
   width:100%; 
}

}

</style>
