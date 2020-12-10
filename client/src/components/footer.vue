<template>
  <section>
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="4" md="6">
          <div class="avlod_logo_footer">
            <img :src="require('../assets/logoFooter.svg')" alt="" />
            <div class="avlod_footer_right">
              <h3>
                AVLOD 21
                <br />
                BUSINESS ACADEMY
              </h3>
            </div>
          </div>
          <div class="avlod_footer_powered">
            <p>Powered by <a href="https://cloud9.uz">Cloud9 ITcompany</a></p>
          </div>
        </b-col>
        <b-col cols="12" lg="4" md="6">
          <div class="avlod_footer_social">
            <h3>
              Telefon
            </h3>
            <a href="tel:+998 55 500 21 00">
              +998 55 500 21 00
            </a>
            <div class="avlod_social_footer_icon">
              <a href="http://t.me/avlod21">
                <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.41718 13.1809L9.02018 18.7649C9.58818 18.7649 9.83418 18.5209 10.1292 18.2279L12.7922 15.6829L18.3102 19.7239C19.3222 20.2879 20.0352 19.9909 20.3082 18.7929L23.9302 1.82092L23.9312 1.81992C24.2522 0.323917 23.3902 -0.261083 22.4042 0.105917L1.11418 8.25692C-0.338822 8.82092 -0.316822 9.63092 0.867178 9.99792L6.31018 11.6909L18.9532 3.77992C19.5482 3.38592 20.0892 3.60392 19.6442 3.99792L9.41718 13.1809Z"
                  fill="white"
                />
              </svg>
              </a>
              <a href="https://tinyurl.com/Avlod21-Facebook">
              <svg
                width="13"
                height="24"
                viewBox="0 0 13 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99701 3.985H12.188V0.169C11.81 0.117 10.51 0 8.99601 0C5.83701 0 3.67301 1.987 3.67301 5.639V9H0.187012V13.266H3.67301V24H7.94701V13.267H11.292L11.823 9.001H7.94601V6.062C7.94701 4.829 8.27901 3.985 9.99701 3.985Z"
                  fill="white"
                />
              </svg>
              </a>
              <a href="https://tinyurl.com/Avlod21-instagram">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 0H7.5C3.3585 0 0 3.3585 0 7.5V16.5C0 20.6415 3.3585 24 7.5 24H16.5C20.6415 24 24 20.6415 24 16.5V7.5C24 3.3585 20.6415 0 16.5 0ZM21.75 16.5C21.75 19.395 19.395 21.75 16.5 21.75H7.5C4.605 21.75 2.25 19.395 2.25 16.5V7.5C2.25 4.605 4.605 2.25 7.5 2.25H16.5C19.395 2.25 21.75 4.605 21.75 7.5V16.5Z"
                  fill="white"
                />
                <path
                  d="M12 6C8.6865 6 6 8.6865 6 12C6 15.3135 8.6865 18 12 18C15.3135 18 18 15.3135 18 12C18 8.6865 15.3135 6 12 6ZM12 15.75C9.933 15.75 8.25 14.067 8.25 12C8.25 9.9315 9.933 8.25 12 8.25C14.067 8.25 15.75 9.9315 15.75 12C15.75 14.067 14.067 15.75 12 15.75Z"
                  fill="white"
                />
                <path
                  d="M18.4499 6.34949C18.8914 6.34949 19.2494 5.99154 19.2494 5.54999C19.2494 5.10844 18.8914 4.75049 18.4499 4.75049C18.0083 4.75049 17.6504 5.10844 17.6504 5.54999C17.6504 5.99154 18.0083 6.34949 18.4499 6.34949Z"
                  fill="white"
                />
              </svg>
              </a>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="4" md="6">
          <div class="avlod_footer_address">
            <h3>
              Manzil
            </h3>
            <p>
              Shayhontohur tumani, Maxtumquli ko'chasi
              <br />
              Mo’ljal: Beruniy metrosi
            </p>
            <div class="avlod_social_footer_icon"></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data: () => ({
    //
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background: #003b63;
  padding-top: 50px;
  padding-bottom: 35px;
}
.avlod_logo_footer {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 25px;
}
.avlod_footer_right {
  padding: 6px 14px;
  border-left: 2px solid white;
  margin-left: 12px;
}
.avlod_footer_right h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
}
.avlod_footer_powered p {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #f3f5f7;
}
.avlod_footer_social {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.avlod_footer_social h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
}
.avlod_footer_social a {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 15px;
}
.avlod_social_footer_icon {
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avlod_footer_address{
  text-align: center;
}
.avlod_footer_address h3{
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
}
.avlod_footer_address p{
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #FFFFFF;
}
@media (max-width:767px) {
  .avlod_logo_footer {
    justify-content: center;
  }
  .avlod_footer_powered{
    text-align: center;
  }
}
</style>
