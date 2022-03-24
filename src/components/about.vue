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
  <table id="tb">
  <tbody>
    <tr>
      <td style="width: 30%; text-align: center;">
        <div>
        <p style="text-align: center;"><img alt="" src="https://i.postimg.cc/gJyVQW6m/Golden-Arrow-Bus-Service-logo-479x480.jpg" style="float: none;" /></p>
        </div>
      </td>
      
      <td style="width: 30%; text-align: center; height: 230px;">

        <p><span style="color: #fd7e14;"><b>ABOUT GOLDEN ARROW BUS SERVICES</b></span></p>

<p><strong>Golden Arrow Bus Services (GABS) is the major public transport bus service operator for Cape Town, South Africa, providing commuter bus services throughout a large part of the City of Cape Town metropolitan area.

Founded in 1861, and owned by South African holding company Hosken Consolidated Investments Limited, the company operates a fleet of over 1000 buses on 1300 routes, with a daily ridership of around 220,000 people.</strong></p>
      
      </td>
            <td style="width: 30%; text-align: center; height: 230px;">
<div></div>
<div style="text-align: center;"><img alt="" src="https://i.postimg.cc/NF0T5rLP/bus1-1-479x480.png" style="float: none; width" /></div>
</td>
    </tr>
    <tr>
      <td style="width: 30%;">
<div></div>
<p style="text-align: center;"><span style="color: #fd7e14;"><b>GABS'S MISSION</b></span></p>
<div></div>
<p style="text-align: center;"><span><strong>Delivery of safe and reliable scheduled passenger transport. Staff satisfaction, upskilling and other employee benefits. Investment in the community through projects and monetary donations.</strong>  </span></p>
</td>
      <td style="width: 30%; text-align: center;">
<p style="text-align: center;"><img alt="" src="https://i.postimg.cc/fRrkzrhX/bus2-479x480.jpg" style="float: none;" /></p>
</td>
      <td style="width: 30%; text-align: center;">
<div >
<p><span style="color: #fd7e14;"><b>WHY CHOOSE GABS?</b></span></p>
<div><strong>We operate safe,reliable passenger transport services designed to meet the needs of our customers and by applying sound business principles to create a secure future for the company and its people.</strong></div>
</div>

</td>
    </tr>
  </tbody>
</table>
<div class="show_mobile">
  <div id ="statement" >
        <p>
          <span style="color: #fd7e14">
              <b>ABOUT GOLDEN ARROW BUS SERVICES</b>
          </span>
        </p>

    <table id="tb_mobile">
    
  
    </table>
</div>
</div>
 
</template>

<script>
export default {};
</script>

<style>
 #sticky-footer{
      height: 20px;
    }
    

  
  @media screen and (max-width: 650px) {
    .show_mobile{
      display: inline;
    }
    #tb td{
      border: 0;
      
    }
    #statement{
      margin:15px 10% 15px 10%;
      width: 80%; 
      text-align: center;
    }
    #tb_mobile{
      border: 0px solid #ddd;
    }
   
  }




</style>
