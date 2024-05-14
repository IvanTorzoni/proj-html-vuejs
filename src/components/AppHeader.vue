<script>
export default {
    data() {
        return {
            
            //Gestione link del menù
            menu: [
                {
                    title: "Home",
                    routeName: "home",
                },
                {
                    title: "About",
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
    }

}
</script>

<template>
    <div class="ms-bg-purple">
    <header class = "container d-flex flex-row align-items-center justify-content-between ms-bg-purple px-5">
        <img src="../assets/img/main-img/logo.png" alt="" />
        <ul class="d-flex gap-3 px-4 align-items-center">

            <li v-for="item in menu">

                <!-- router link serve come a tag HTML (questo tag fa parte del router stesso). Aggiungere to="{ name : valore corrente del ciclo.nome inserito nel name del router }" -->
                <router-link :to="{ name: item.routeName }">
                    <span>{{ item.title }}</span>
                </router-link>

            </li>

            <li>
                <span class="quote-btn">Get a Quote </span>
            </li>

        </ul>

    </header>
    </div>
</template>

<style scoped lang="scss">
header{
    min-height: 70px;
    color : white;
    font-size: 1rem;
    max-width: 100%;
    position: fixed;
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