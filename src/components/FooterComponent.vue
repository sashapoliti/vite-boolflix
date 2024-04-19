<template>
  <footer class="w-100 d-flex flex-column align-items-center">
    <img src="/images/disneylogo.png" alt="Logo Disney" />
    <ul class="d-flex">
        <li><a @click.prevent="" href="#">Privacy Policy</a></li>
        <li><a @click.prevent="" href="#">Cookies Policy</a></li>
        <li><a @click.prevent="" href="#">EMEA Privacy Rights</a></li>
        <li><a @click.prevent="" href="#">Subscriver Aggrement</a></li>
        <li><a @click.prevent="" href="#">Help</a></li>
        <li><a @click.prevent="" href="#">Supported Devices</a></li>
        <li><a @click.prevent="" href="#">About Us</a></li>
        <li><a @click.prevent="" href="#">Interest-based Ads</a></li>
    </ul>
    <span>&copy; Disney All rights reserved.</span>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

footer {
    color: $c-text;
  background-color: $bg-footer;
  font-size: 0.7rem;
  padding: 20px 0;
  img {
    width: 80px;
  }
  ul {
    padding: 0;
    margin: 20px 0;
    li {
        padding: 0 10px;
        a {
            color: $c-text;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
  }
}
</style>
