<template>
  <div class="ui secondary pointing menu">
        <router-link to="/" class="item">
            <span>Image Storage</span>  
        </router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="item">Galleries</router-link>
                <router-link to="/upload" class="item">Upload</router-link>
                <a class="item" @click="logout">Logout</a>
            </div>
            <a href="#" class="ui item" @click="login" v-else>
                Log In
            </a>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    computed: mapGetters( ['isLoggedIn'] ),
    methods: {
        ...mapActions( ['login', 'logout'] ),
    }
};
</script>

<style>
.horizontal {
    display: flex;
    flex-direction: row;
}
</style>