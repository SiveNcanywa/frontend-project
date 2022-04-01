<template>
  <nav class="navbar navbar-expand-light bg-light">
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
  <div id="about">
    <div class="myRow">
      <div class="data">
        <div>
          <p style="text-align: center">
            <img
              alt=""
              src="https://i.postimg.cc/gJyVQW6m/Golden-Arrow-Bus-Service-logo-479x480.jpg"
              style="float: none"
            />
          </p>
        </div>
      </div>

      <div class="data">
        <p>
          <span style="color: #fd7e14"
            ><b>ABOUT GOLDEN ARROW BUS SERVICES</b></span
          >
        </p>

        <p scope="col">
          <strong
            >Golden Arrow Bus Services (GABS) is the major public transport bus
            service operator for Cape Town, South Africa, providing commuter bus
            services throughout a large part of the City of Cape Town
            metropolitan area. Founded in 1861, and owned by South African
            holding company Hosken Consolidated Investments Limited, the company
            operates a fleet of over 1000 buses on 1300 routes, with a daily
            ridership of around 220,000 people.</strong
          >
        </p>
      </div>
      <div class="data">
        <div></div>
        <div style="text-align: center">
          <img
            alt=""
            src="https://i.postimg.cc/NF0T5rLP/bus1-1-479x480.png"
            style="float: none; width"
          />
        </div>
      </div>

      <div class="data">
        <div></div>
        <p style="text-align: center">
          <span style="color: #fd7e14"><b>GABS'S MISSION</b></span>
        </p>
        <div></div>
        <p style="text-align: center">
          <span
            ><strong
              >Delivery of safe and reliable scheduled passenger transport.
              Staff satisfaction, upskilling and other employee benefits.
              Investment in the community through projects and monetary
              donations.</strong
            > 
          </span>
        </p>
      </div>
      <div class="data">
        <p style="text-align: center">
          <img
            alt=""
            src="https://i.postimg.cc/fRrkzrhX/bus2-479x480.jpg"
            style="float: none"
          />
        </p>
      </div>
      <div class="data">
        <div>
          <p>
            <span style="color: #fd7e14"><b>WHY CHOOSE GABS?</b></span>
          </p>
          <div>
            <strong
              >We operate safe,reliable passenger transport services designed to
              meet the needs of our customers and by applying sound business
              principles to create a secure future for the company and its
              people.</strong
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#sticky-footer {
  height: 20px;
}

.myRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.data {
  max-width: 500px;
  width: 100%;
}
</style>
