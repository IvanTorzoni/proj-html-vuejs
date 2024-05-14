<script>
export default{
    props : {
        serviceImage : String,
        serviceTitle : String,
        serviceP : String
    },
    methods : {
        getImagePath(servImage){
            return new URL(`../../assets/Img/about-img/${servImage}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="ms_serv-card p-4 text-center d-flex flex-column align-items-center">
        <div class="serv-img d-flex align-items-center">
            <img :src="getImagePath(serviceImage)" />
        </div>
        <h2> {{ serviceTitle }}</h2>
        <p> {{ serviceP }}</p>
    </div>
</template>

<style lang="scss">
.ms_serv-card{
    border: 1px solid lightgrey;
    border-radius: 30px;
    box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.17);
    transition: 0.7s;
    .serv-img{
        width: 75px;
        height: 75px;
        border-radius: 100%;
        overflow: hidden;
            img{
                width: 100%; 
                padding: 10px;
                height: auto;
                display: block;
            }
    }
}

.ms_serv-card:hover{
    box-shadow: none;
    transition: 0.7s;
}

</style>