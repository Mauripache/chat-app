<template>
    <div>
        <div v-if="isLoggedIn" class="ui three column grid">
            <div v-if="itemsForDelete.length > 0" @click="deleteImages(itemsForDelete)" class="ui animated negative button column centered" tabindex="0">
                <div class="visible content">Delete selected</div>
                <div class="hidden content">
                    <i class="trash icon"></i>
                </div>
            </div>
            <div class="row three column">
                <div class="column" v-for="image in allImages" >
                    <button class="ui icon toggle button" :class="{ active: isAddedForDelete(image)}" @click="addItemToDelete(image)">
                        <i class="trash icon"></i>
                    </button>
                    <img :src="image.link"/>   
                </div>
            </div>
        </div>
        <h2 v-else>Please login</h2>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    data() {
       return {
            itemsForDelete: []
       }
    },
    computed: {
        ...mapGetters(['allImages', 'isLoggedIn']),
    },
    methods: {
        ...mapActions( ['fetchImages', 'deleteImages'] ),
        addItemToDelete(selectedImage) {
            if(this.itemsForDelete.indexOf(selectedImage) == -1){
                this.itemsForDelete.push(selectedImage);
            } else if(this.itemsForDelete.indexOf(selectedImage) != -1) {
                this.itemsForDelete = this.itemsForDelete.filter(item => item != selectedImage);
            }       
        },
        isAddedForDelete(selectedImage) {
            return this.itemsForDelete.indexOf(selectedImage) != -1;
        }
    },
    created() {
        this.fetchImages();
        this.itemsForDelete = [];
    }
}
</script>

<style scoped>
.ui.three.column.grid {
    margin-top: 20px;
}
.ui.icon.toggle.button {
    position: absolute;
    margin-top: 5px;
    margin-left: 313px;
}
.ui.icon.toggle.button.active {
    background-color: #d01919 !important;
}
img {
    max-width: 100%;
    margin-bottom: 20px;
}
</style>