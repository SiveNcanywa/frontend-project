<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">GABS<i class="fas fa-bus"></i></span>
      <ul class="nav nav-pills justify-content-end">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <form @submit.prevent="handleSubmit()" class="container">
    <h2>Contact Us</h2>
    <div class="row100">
      <div class="col">
        <div class="inputBox">
          <input
            type="text"
            name=""
            required
            placeholder="First name"
            v-model="firstname"
          />

          <span class="line"></span>
        </div>
      </div>
      <div class="col">
        <div class="inputBox">
          <input
            type="text"
            name=""
            required
            placeholder="Last name"
            v-model="lastname"
          />

          <span class="line"></span>
        </div>
      </div>
    </div>
    <div class="row100">
      <div class="col">
        <div class="inputBox">
          <input
            type="text"
            name=""
            required
            placeholder="Email"
            v-model="email"
          />

          <span class="line"></span>
        </div>
      </div>
      <div class="col">
        <div class="inputBox">
          <input
            type="text"
            name=""
            required
            placeholder="Phone number"
            v-model="phone_number"
          />

          <span class="line"></span>
        </div>
      </div>
    </div>

    <div class="row100">
      <div class="col">
        <div class="inputBox textarea">
          <textarea
            name=""
            id=""
            required
            placeholder="Message"
            v-model="message"
          ></textarea>
          >
          <span class="line"></span>
        </div>
      </div>
    </div>
    <div class="row100">
      <div class="col">
        <button type="submit" class="btn btn-dark">Send</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      email: "",
      lastname: "",
      phone_number: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.firstname,this.message,this.lastname,this.message,this.phone_number)
      fetch("https://sive-ticketing.herokuapp.com/contact", {
        method: "POST",
        mode:'no-cors',
        body: JSON.stringify({
          firstname: this.firstname,
          message: this.message,
          email: this.email,
          lastname: this.lastname,
          phone_number: this.phone_number,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
       .then((response) => response.json())
       .then((json) => {
         console.log(json)
         alert(json.msg)})
      .catch((err) => alert(err.msg));
    },
    
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,700&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

.container {
  margin-left: 212px;
  width: 80%;
  padding: 20px;
  margin-top: 100px;
}

.container h2 {
  width: 100%;
  color: goldenrod;
  font-size: 36px;
  text-align: center;
  margin-bottom: 10px;
}

.container .row100 {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.container .row100 .col {
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 30px 0 10px;
  transition: 0.5s;
}

.container .row100 .inputBox {
  position: relative;
  width: 100%;
  height: 40px;
  color: #45f3ff;
}

.container .row100 .inputBox input,
.container .row100 .inputBox.textarea textarea {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 0 10px;
  z-index: 1;
  color: #000;
}

.container .row100 .inputBox .text {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 40px;
  font-size: 18px;
  padding: 0 10px;
  display: block;
  transition: 0.5s;
  pointer-events: none;
}

.container .row100 .inputBox input:focus + .text,
.container .row100 .inputBox input:valid + .text {
  top: -35px;
  left: -10px;
}

.container .row100 .inputBox .line {
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: #fd7e14;
  border-radius: 2px;
  pointer-events: none;
}

.container .row100 .inputBox input:focus ~ .line,
.container .row100 .inputBox input:valid ~ .line {
  height: 100%;
}

.container .row100 .inputBox.textarea {
  position: relative;
  width: 100%;
  height: 100px;
  padding: 10px 0;
}

.container .row100 .inputBox.textarea textarea {
  height: 100%;
  resize: none;
}

.container .row100 .inputBox textarea:focus + .text,
.container .row100 .inputBox textarea:valid + .text {
  top: -35px;
  left: -10px;
}

.container .row100 .inputBox textarea:focus ~ .line,
.container .row100 .inputBox textarea:valid ~ .line {
  height: 100%;
}

input[type="submit"] {
  border: none;
  padding: 7px 35px;
  cursor: pointer;
  outline: none;
  background: #fd7e14;
  color: #000;
  font-size: 18px;
  border-radius: 2px;
}
</style>
