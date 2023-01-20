<template>
  <div>
    <v-row class="body_row">
      <div class="col-12 col-md-6 col-lg-6 col-xl-6 imageLogo"></div>
      <div class="col-12 col-md-6 col-lg-6 col-xl-6">
        <div class="login_form">
          <form class="login_content">
            <div class="header">
              <header>Sign in</header>
            </div>
            <div class="inputFields">
              <v-text-field
                :autofocus="true"
                type="email"
                color="var(--primary-color)"
                :height="47"
                label="Email Address"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div class="inputFields">
              <v-text-field
                type="password"
                color="var(--primary-color)"
                :height="47"
                label="Password"
              ></v-text-field>
            </div>
            <div class="submit_wrapper">
              <v-btn class="Btn">
                <span>Log in</span>
              </v-btn>
            </div>
          </form>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      rules: [
        (value) => !!value || "Required.",
        (value) =>
          (value && value.includes(".com") && value.includes("@")) ||
          "Requires an email",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.body_row {
  height: 100vh;
  overflow: hidden;
  margin: 0;
  .imageLogo {
    height: 100%;
    background-color: var(--primary-color);
  }
  .login_form {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login_content {
      min-width: 75%;
      .header {
        margin-bottom: 20px;
        text-align: center;
        color: var(--primary-color);
        header {
          font-size: 3rem;
          font-weight: 600;
        }
      }
      .inputFields {
        margin-top: 15px;
      }
    }
  }
}
.submit_wrapper {
  padding-top: 28px;
  text-align: center;
}

.submit_wrapper.submitted {
  padding-bottom: 58px;
}

.submit_wrapper .Btn {
  min-width: 50%;
  height: 3.8rem;
  background-color: var(--primary-color);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  text-transform: initial;
}

.submit_wrapper .Btn span {
  color: #fff;
  font-weight: 500;
  font-size: 1.4rem;
}

.submit_wrapper .Btn[disabled] {
  background-color: var(--btn-disabled-color) !important;
}
</style>