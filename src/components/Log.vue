<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">GABS<i class="fas fa-bus"></i></span>
      <ul class="nav nav-pills justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label
        for="tab-1"
        class="tab"
        >Sign In</label
      >
      <input id="tab-2" type="radio" name="tab" class="sign-up" /><label
        for="tab-2"
        class="tab"
        >Sign Up</label
      >
      <div class="login-form">
        <form @submit.prevent="login" class="sign-in-htm">
          <div class="group">
            <label class="label">Username</label>
            <input type="text" class="input" v-model="username" />
          </div>
          <div class="group">
            <label class="label">Password</label>
            <input type="password" class="input" v-model="password" />
          </div>

          <div class="group">
            <input type="submit" class="button" />
          </div>
       
          <div class="hr"></div>
          <div class="foot-lnk">
            <label for="tab-2">Dont have an account?</label>
          </div>
        </form>
        <form @submit.prevent="register" class="sign-up-htm">
          <div class="group">
            <label class="label">Username</label>
            <input type="text" class="input" v-model="username" required />
          </div>
          <div class="group">
            <label class="label">Password</label>
            <input type="password" class="input" v-model="password" required />
          </div>
          <div class="group">
            <label class="label">Phone Number</label>
            <input type="text" class="input" v-model="phone_number" required />
          </div>

          <div class="group">
            <label class="label">Email Address</label>
            <input type="text" class="input" v-model="email" required />
          </div>
          <div class="group">
            <input type="submit" class="button" />
          </div>
          <div class="hr"></div>
          <div class="foot-lnk">
            <label for="tab-1">Already Member?</label>
          </div>
        </form>
      </div>
    </div>
    <div v-show="loading" class="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      phone_number: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      const details = {
        username: this.username,
        password: this.password,
      };
      console.log("details");
      fetch("https://sive-ticketing.herokuapp.com/user/signin", {
        method: "PATCH",
        // mode: "no-cors",
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((user) => {
          console.log(user);
          this.loading = false;
          alert("User logged in");
          localStorage.setItem("jwt", user.jwt);
          localStorage.setItem("id",user.id);
          localStorage.setItem("username", user.username);
          localStorage.setItem("email", user.email);
          localStorage.setItem("phone_number", user.phone_number);
          localStorage.setItem("password", user.password);
          this.$router.push({ name: "products" });
        })
        .catch((err) => {
          this.loading = false;
          alert(err);
        });
    },
    register() {
      console.log(this.password);
      let newUser = {
        username: this.username,
        email: this.email,
        phone_number: this.phone_number,
        password: this.password,
      };
      console.log(newUser);
      fetch("https://sive-ticketing.herokuapp.com/user/signup", {
        method: "POST",
        // mode: "no-cors",
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((user) => {
          console.log(user);
          alert("User registered");
          localStorage.setItem("jwt", user.jwt);
          this.$router.push({ name: "products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  color: #6a6f8c;
  background: #c8c8c8;
  font: 600 16px/18px "Open Sans", sans-serif;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}

.login-wrap {
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
  background: url(https://lh3.googleusercontent.com/0CMR18D_jXKneiA6RAonctP6mAGiToQ6dQOJxbRopxXFdfJ1e0-vxKfnPeXLRrWxOe7Sy7b78NJvibp7DcIwtw)
    no-repeat center;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  margin-top: 7%;
}
.login-html {
  width: 100%;
  height: 105%;
  position: absolute;
  padding: 62px 70px 50px 70px;
  background: rgba(66, 129, 37, 0.9);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
  display: none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
}
.login-html .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab {
  color: #fff;
  border-color: goldenrod;
}
.login-form {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-form .group {
  margin-bottom: 15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: black;
  display: block;
}
.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
}
.login-form .group input[data-type="password"] {
  -webkit-text-security: circle;
}
.login-form .group .label {
  color: #aaa;
  font-size: 12px;
}
.login-form .group .button {
  background: #fa8c26;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-form .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-form .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-form .group .check:checked + label {
  color: #fff;
}
.login-form .group .check:checked + label .icon {
  background: #1161ee;
}
.login-form .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-html
  .sign-in:checked
  + .tab
  + .sign-up
  + .tab
  + .login-form
  .sign-in-htm {
  transform: rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
  transform: rotate(0);
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}
.foot-lnk {
  text-align: center;
}
</style>
