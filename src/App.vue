<template>
  <TheNavbar :handleLogout="handleLogout" />
  <router-view />
  <TheFooter />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import { useStore } from "vuex";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import store from "./store";
import toast from "./store/toaster/index.js";

export default {
  name: "App",

  components: {
    TheNavbar,
    TheFooter,
  },
  setup() {
    const { dispatch } = useStore();
    dispatch("product/setProducts");
  },
  methods: {
    handleLogout() {
      const currentUser = getAuth().currentUser;
      const auth = getAuth();
      if (currentUser && auth) {
        signOut(auth)
          .then(() => {
            this.$router.replace("/signin");
            toast.clear();
            toast.logoutToast();
          })
          .catch((error) => {
            toast.clear();
            toast.errorToast(error);
          });
      }
      store.dispatch("cart/clearCart");
      this.$router.push("/");
    },
  },
};
</script>