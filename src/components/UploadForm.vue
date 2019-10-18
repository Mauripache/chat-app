<template>
    <div class="ui segment">
        <div class="ui active dimmer" v-if="isUploading">
            <div class="ui text loader">Uploading images, please wait...</div>
        </div>
        <div class="dropper">
            <input type="file" multiple accept="image/*" @change="uploadImages($event.target.files)"/>
            <span>Drag files here!</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'UploadForm',
    computed: mapGetters(['isUploading']),
    methods: mapActions(['uploadImages','setUploading']),
    created() {
        this.setUploading(false);
    }
}
</script>

<style scoped>
.dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.dropper:hover {
    background-color: #eee;
}
input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
</style>