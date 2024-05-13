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
                    title: "Contact",
                    routeName: "contact",
                },
            ]
        }
    }

}
</script>

<template>
    <h2>header</h2>
    <header>
        <ul>
            <li v-for="item in menu"> 
                <!-- router link serve come a tag HTML (questo tag fa parte del router stesso). Aggiungere to="{ name : valore corrente del ciclo.nome inserito nel name del router }" -->
                <router-link :to="{name: item.routeName}" >
                    {{ item.title }}
                </router-link>
             </li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
</style>