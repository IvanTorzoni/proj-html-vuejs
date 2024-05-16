<script>
export default{
    data(){
        return{
            scrolPerc : 0,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            //Valore sull'asse delle y della pagina, window.scrollY Prende i pixel del documento in verticale
            const scrollYaxis = window.scrollY || document.documentElement.scrollTop;
            //sottrae dall'Altezza totale del documento (scrollabile) la window.innerHeight ossia la parte visibile della page
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            //calcolo percentuale
            this.scrolPerc = (scrollYaxis / windowHeight) * 100;
        },
        backToTheTop(){
            //console.log('click');
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<template>
    <div :class="{ 'progress' : scrolPerc >= 16 , 'hidden' : scrolPerc < 16 }" @click="backToTheTop">
        <span id="valiu">
            <i class="fas fa-arrow-up"></i>
        </span>
    </div>
</template>

<style>
.progress {
    background-color: #260262;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    position: fixed;
    right: 20px;
    z-index: 9999;
    display: block;
    transition: all 0.7s;
    bottom: 20px;
    cursor: pointer;
}

.progress:hover{
    background-color: #4D36DC;
    transition: all 0.7s;
}

.hidden{
    display: none;
}
</style>