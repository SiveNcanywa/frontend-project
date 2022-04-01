<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">GABS<i class="fas fa-bus"></i></span>
      <ul class="nav nav-pills justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Tickets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#profile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="calculate-fare">
    <header class="calculate-fare-header">
      <div class="wrapper">
        <img
          src="https://www.gabs.co.za/Assets/Images/logo_main.png"
          alt="Septa"
          logo
        />
        <h1>Golden Arrow Bus</h1>
      </div>
    </header>
    <!-- Form -->
    <h2 class="sr-only">Calculate your fare</h2>
    <form id="calculate-fare-form">
      <div class="calculate-fare-formfield calculate-fare-formfield--dropdown">
        <label class="calculate-fare-text--question" for="calculate-fare-zone"
          >Depature</label
        >
        <select
          class="calculate-fare-field"
          id="calculate-fare-zone"
          required="required"
          aria-required="true"
          v-model="departure"
          @change="priceCalculator"
        >
          <option value="Atlantis">Atlantis</option>
          <option value="Blue Downs">Blue Downs</option>
         
        </select>
      </div>
      <!-- Q2 -->
      <div class="calculate-fare-formfield calculate-fare-formfield--dropdown">
        <label class="calculate-fare-text--question" for="calculate-fare-time"
          >Arrival</label
        >
        <select
          class="calculate-fare-field"
          id="calculate-fare-time"
          required="required"
          aria-describedby="calculate-fare-time-info"
          aria-required="true"
          v-model="arrival"
          @change="priceCalculator"
        >
          <option value="Cape Town">Cape Town</option>
          <option value="Bellvile">Bellvile</option>
          
        </select>
      </div>
      <!-- Q3 -->
      <div class="calculate-fare-formfield calculate-fare-formfield--radio">
        <fieldset>
          <legend class="calculate-fare-text--question">Ticket Duration</legend>
          <p>
            <input
              class="calculate-fare-field"
              type="radio"
              name="purchase_location"
              value="monthly"
              id="calculate-fare-advance"
              checked="checked"
              required="required"
              aria-describedby="calculate-fare-purchase-info"
              aria-required="true"
              v-model="duration"
              @change="priceCalculator"
            />
            <label for="calculate-fare-advance">Monthly</label>
          </p>
          <p>
            <input
              class="calculate-fare-field"
              type="radio"
              name="purchase_location"
              value="weekly"
              id="calculate-fare-onboard"
              required="required"
              aria-describedby="calculate-fare-purchase-info"
              aria-required="true"
              v-model="duration"
              @change="priceCalculator"
            />
            <label for="calculate-fare-onboard">Weekly</label>
          </p>
          <span
            class="calculate-fare-text--helper"
            id="calculate-fare-purchase-info"
          ></span>
        </fieldset>
      </div>
      <!-- Q4 -->
    </form>
    <!-- Result -->
    <footer class="calculate-fare-footer">
      <p class="calculate-fare-text--total">
        Your ticket will cost
        <span id="calculate-fare-total">R{{ total }}.00</span>
      </p>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Proceed to Payment
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Golden Arrow bus tickets
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="handlePayment()">
              <div class="container p-0">
                <div class="card px-4">
                  <p class="h8 py-3">Payment Details</p>
                  <div class="row gx-3">
                    <div class="col-12">
                      <div class="d-flex flex-column">
                        <p class="text mb-1" >Email address</p>
                        <input
                          class="form-control mb-3"
                          type="text"
                          v-model="email"
                          placeholder="enter a valid email for proof of purchase"
                          
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input
                          class="form-control mb-3"
                          type="number"
                          placeholder="1234 5678 435678"
                          v-model="card_number"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input
                          class="form-control mb-3"
                          type="expiry"
                          placeholder="MM/YYYY"
                          v-model="expiry"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input
                          class="form-control mb-3 pt-2"
                          type="ccv"
                          placeholder="***"
                          v-model="cvv"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departure: null,
      arrival: null,
      duration: null,
      total: 0,
      ccv:null,
      expiry:null,
      card_number:null,
      email:null,

    };
  },
  methods: {
    priceCalculator() {
      console.log(this.departure,this.arrival,this.duration,this.total)
      if (this.departure && this.arrival && this.duration) {
        if (
          this.departure === "Atlantis" &&
          this.arrival === "Cape Town" &&
          this.duration === "weekly"
        ) {
          this.total = 250;
        }
        if(this.departure==="Blue Downs"&&
          this.arrival==="Cape Town"&&
          this.duration ==="weekly"
          ){
            this.total=300;
          }
          if(this.departure ==="Atlantis" &&
          this.arrival ==="Bellvile" &&
          this.duration ==="weekly"
          ){
            this.total=150;
          }
          if(this.departure ==="Blue Downs" &&
          this.arrival ==="Bellvile" &&
          this.duration ==="weekly"
          ){
            this.total=270;
          }
           if (
          this.departure === "Atlantis" &&
          this.arrival === "Cape Town" &&
          this.duration === "monthly"
        ) {
          this.total = 670;
        }
        if(this.departure ==="Blue Downs"&&
          this.arrival ==="Cape Town"&&
          this.duration ==="monthly"
          ){
            this.total=1250;
          }
          if(this.departure ==="Atlantis" &&
          this.arrival ==="Bellvile" &&
          this.duration ==="monthly"
          ){
            this.total=950;
          }
          if(this.departure === "Blue Downs" &&
          this.arrival === "Bellvile" &&
          this.duration ==="monthly"
          ){
            this.total=1000;
          }
      }
    },
    handlePayment(){
      console.log(this.ccv,this.card_number,this.email,this.expiry)
      fetch("https://sive-ticketing.herokuapp.com/payment", {
        method: "POST",
        mode:'no-cors',
        body: JSON.stringify({
          card_number: this.card_number,
          cvv: this.cvv,
          email: this.email,
          expiry: this.expiry,

        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
       .then((response) => response.json())
       .then((json) => alert(json.msg))
      .catch((err) => alert(err.msg));
    },
    
  },
  };

</script>

<style scoped>
#products {
  height: 100vh;
  width: 100%;
  background-color: goldenrod;
}
#staticBackdropLabel {
  color: black;
}
legend {
  padding: 0;
  display: table;
}
.container {
  margin-left: 50px;
  margin-top: 20px;
}

.card {
  max-width: 500px;
  margin: auto;
  color: black;
  border-radius: 20 px;
}

p {
  margin: 0px;
}

.container .h8 {
  font-size: 30px;
  font-weight: 800;
  text-align: center;
}

.btn.btn.btn-primary:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

.btn.btn-primary:hover .fas.fa-arrow-right {
  transform: translate(15px);
  transition: transform 0.2s ease-in;
}
.btn.btn {
  background-color: #fa8c26;
}

.form-control {
  color: white;
  background-color: rgba(66, 129, 37, 0.9);
  border: 2px solid transparent;
  height: 60px;
  padding-left: 20px;
  vertical-align: middle;
}
.form-control placeholder{
  color:white;
}

.form-control:focus {
  color: white;
  background-color: rgba(66, 129, 37, 0.9);
  border: 2px solid #2d4dda;
  box-shadow: none;
}

.text {
  font-size: 14px;
  font-weight: 600;
}

fieldset {
  border: 0;
  padding: 0.01em 0 0 0;
  margin: 0;
  min-width: 0;
}

body:not(:-moz-handler-blocked) fieldset {
  display: table-cell;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.calculate-fare {
  background: #fff;
  border: 2px solid #cccccc;
  color: #595959;
  font-family: "Open Sans", sans-serif;
  margin: 35px auto;
  max-width: 640px;
  text-align: center;
  width: 100%;
}

.calculate-fare-header {
  background: #595959;
  color: #fff;
  padding: 20px 0 30px;
}
.calculate-fare-header h1 {
  display: inline-block;
  font-size: 2em;
  margin: 0;
}
@media screen and (max-width: 480px) {
  .calculate-fare-header h1 {
    font-size: 1.5em;
  }
}
.calculate-fare-header img {
  display: inline-block;
  height: 100%;
  margin-bottom: -5px;
  margin-right: 5px;
  max-height: 33px;
  width: auto;
}
.calculate-fare-header .wrapper {
  height: 33px;
  width: 100%;
}
@media screen and (max-width: 480px) {
  .calculate-fare-header .wrapper {
    height: 28px;
  }
}

.calculate-fare-text--question {
  display: block;
  font-weight: 700;
  margin-bottom: 15px;
}

.calculate-fare-text--helper {
  display: block;
  font-size: 0.8em;
  margin-top: 15px;
}

.calculate-fare-text--total {
  font-weight: 700;
}
.calculate-fare-text--total span {
  display: block;
  font-size: 3em;
}

.calculate-fare-formfield {
  border-bottom: 1px solid #cccccc;
  padding: 20px;
}
.calculate-fare-formfield input:disabled + label {
  color: #cccccc;
}

.calculate-fare-formfield--dropdown select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #cccccc;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  padding: 15px;
  width: 275px;
  background-image: linear-gradient(125deg, #595959 50%, transparent 50%),
    linear-gradient(55deg, transparent 50%, #595959 50%);
  background-position: calc(100% - 13px) 1.5em, calc(100% - 20px) 1.5em;
  background-size: 8px 8px, 8px 8px;
  background-repeat: no-repeat;
}
.calculate-fare-formfield--dropdown select::-ms-expand {
  display: none;
}

.calculate-fare-formfield--radio legend {
  width: 100%;
}
.calculate-fare-formfield--radio p {
  margin: 0 auto;
  text-align: left;
  width: 125px;
}

.calculate-fare-formfield--textbox input {
  border: 1px solid #cccccc;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  padding: 15px;
  text-align: center;
  width: 100px;
}

.calculate-fare-footer {
  background: #595959;
  color: #fff;
  padding: 20px;
}
</style>
