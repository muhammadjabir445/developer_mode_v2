<template>
<div>

<v-navigation-drawer app v-model="drawer" class="light" width="300px">
	  <v-list-item>
        <v-list-item-avatar>
          <v-img :src="user.foto_profile ? user.foto_profile : 'https://buattaspromosi.com/wp-content/uploads/2019/10/about-me.png'"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style=" white-space: normal;">{{user.name }}</v-list-item-title>
          <!-- <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle> -->
          <v-list-item-subtitle >{{user.role.description}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

       <v-list-item>
        <v-list-item-content>
           <v-btn rounded color="info" small block dark @click="openDialog" >Edit Profile</v-btn>
        </v-list-item-content>
      </v-list-item>

       <v-divider></v-divider>

       <v-list class="pb-0 pt-0" dense >
        <div v-for="item in menu" :key="item.id">
            <v-list-item
	        :to="item.url"
            :color="color"
            active-class="text--accent-3"
            v-if="item.status_child == false"
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.description }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>

            <v-list-group
                :prepend-icon="item.icon"
                no-action
                active-class="text--accent-3"
                v-else
                :color="color"
                >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="item.description"></v-list-item-title>
                </v-list-item-content>
                </template>
                <v-list-item
                v-for="subItem in item.child_menu"
                :key="subItem.id"

                    :href="subItem.url"
                    :to="subItem.url"
                active-class="text--accent-3"
                :color="color"
                >
                <v-list-item-content>
                    <v-list-item-title v-text="subItem.description"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>

        </div>
      </v-list>
</v-navigation-drawer>
<EditProfile />
</div>


</template>
<style scoped>
    .v-icon.v-icon{
        font-size: 19px !important;
    }


</style>
<script>
import { mapGetters, mapActions } from 'vuex'
import EditProfile from '../external/EditProfile'

export default {
    name: 'sidebar',
    computed: {
    // mapping state sideBar menggunakan map getter
        ...mapGetters({
        sideBar : 'sideBar',
        user : 'auth/user',
        menu : 'auth/menu',
        color: 'color/color'

        }),
        // ubah properti data drawer menjadi computed dimana nilainya membaca dari state sideBar
        drawer: {
            get () {
            return this.sideBar
            },
            set (value) {
            this.setSidebar(value)
            }
        },
    },

    methods: {
		// mapping action setSideBar pada store menggunakan map action
		...mapActions({
		setSidebar : 'setSidebar',
        setSnakbar : 'snakbar/setSnakbar',
        setDialog : 'dialog/setDialog'
        }),

        openDialog(){
            this.setDialog(true)
        }


    },

    created(){

    },
    components:{
        EditProfile
    }

}
</script>
