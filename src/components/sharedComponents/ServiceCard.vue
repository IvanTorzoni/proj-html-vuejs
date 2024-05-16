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
    <div class="ms_serv-card text-center d-flex flex-column align-items-center">
        <div class="serv-img d-flex align-items-center">
            <img :src="getImagePath(serviceImage)" />
        </div>
        <h2 class="f-chakra ms_fw-600 mt-4"> {{ serviceTitle }}</h2>
        <p class="f-barlow mt-3"> {{ serviceP }}</p>
    </div>
</template>

<style lang="scss">
.ms_serv-card{
    border: 1px solid #edddff;
    border-radius: 30px;
    box-shadow: 0px 8px 18px 0px rgba(48, 5, 108, 0.18);
    transition: 0.7s;
    padding: 50px 20px;
    .serv-img{
        width: 95px;
        height: 95px;
        padding: 8px;
        border-radius: 100%;
        overflow: hidden;
        background-color: #fcece4;
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