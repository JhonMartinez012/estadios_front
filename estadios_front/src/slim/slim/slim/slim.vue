/*
* Slim v4.19.0 - Image Cropping Made Easy
* Copyright (c) 2018 Rik Schennink - http://slimimagecropper.com
*/
<template>
    <div class="slim">
        <!-- <slot name="img" /> -->
    </div>
</template>

<script>
// Slim (place slim CSS and slim.module.js file in same folder as this file)
import Slim from './slim.module.js'

var instance = null

export default {
    name: 'SlimCropper',
    props: ['options'],
    data(){
        return {
            instanciaCrop:null
        }
    },
    mounted: function(){
        if (this.options.initialImage){
            var img = document.createElement('img')
            img.setAttribute('alt', '')
            img.src = this.options.initialImage
            this.$el.appendChild(img)
        }
        instance = new Slim(this.$el, this.options);
        this.instanciaCrop = instance;
    },
    beforeDestroy: function(){
        // instance.destroy();
        // this.instanciaCrop.destroy();
    },
    methods:{
        get_image(){
            return this.instanciaCrop.dataBase64.output.image;
        },
        set_image(path = ''){
            this.instanciaCrop.load(`${path}?v=${+new Date()}`)
        }
    }
}
</script>
<style lang="css">
@import "./slim.min.css";
</style>
