<script>
export default {
    data() {
        return {
            //Variabile che gestisce la percentuale in scrolling
            scrolPerc : 0,
            //Gestione link del menù
            menu: [
                {
                    title: "Home",
                    routeName: "home",
                },
                {
                    title: "About Us",
                    routeName: "about",
                },
                {
                    title : "Portfolio",
                    routeName : "portfolio",
                },
                {
                    title : "Our Process",
                    routeName : "process",
                },
                {
                    title : "Pricing",
                    routeName : "pricing",
                },
                {
                    title : "Blog",
                    routeName : "blog",
                },
                {
                    title: "Contact",
                    routeName: "contact",
                },
            ]

        }
    },
    //All'avvio della pagina inizia il calcolo dello scrolling, all'evento scroll
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
        }
    }
};

</script>

<template>
    <div class="ms-bg-purple">
    <header :class="{ 'ms-bg-purple': scrolPerc >= 15 }" class = "container d-flex flex-row align-items-center justify-content-between px-5">
        <img src="../assets/img/main-img/logo.png" alt="" />
        <ul class="d-flex gap-3 px-4 align-items-center">

            <li v-for="item in menu" class="ms_fw-500 ms_fs-list f-chakra">

                <!-- router link serve come a tag HTML (questo tag fa parte del router stesso). Aggiungere to="{ name : valore corrente del ciclo.nome inserito nel name del router }" -->
                <router-link :to="{ name: item.routeName }">
                    <span class="ms_fw-600">{{ item.title }}</span>
                </router-link>

            </li>

            <li class="ms_fw-500 ms_fs-list f-chakra">
                <span class="quote-btn ms_fw-600">Get a Quote </span>
            </li>

        </ul>

    </header>
    </div>
</template>

<style scoped lang="scss">
header{
    min-height: 70px;
    z-index: 99999;
    color : white;
    font-size: 1rem;
    max-width: 100%;
    position: fixed;
    transition: background-color 0.5s ease;
    img{
        max-width: 125px;
    }
}

.quote-btn{
    padding: 12px 38px 12px;
    background-color: #ffdfed;
    display: inline-block;
    border-radius: 100px;
    color : black;
    box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
    border: 1px solid rgba(0, 0, 0, 0);
    transition: 0.7s;
}
.quote-btn:hover{
    transition: 0.7s;
    color: white;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0);
}
ul{
    li{
        span{
            transition: 0.5s;
        }
        span:hover{
            color : #ff7a1f;
            transition: 0.5s;
        }
    }
}
</style>