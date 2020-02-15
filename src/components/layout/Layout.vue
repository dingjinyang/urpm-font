<template>
  <v-app id="inspire">
    <!-- 顶部导航栏-->
    <app-bar />
    <!-- 侧边导航栏 -->
    <navigation-bar />
    <!--  内容区  -->
    <v-content>
      <breadcrumbs class="ml-2" />
      <v-container fluid>
        <v-scroll-x-transition mode="out-in">
          <div class="ml-5">
            <keep-alive>
              <router-view />
            </keep-alive>
          </div>
        </v-scroll-x-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "./navigation/NavigationBar";
import AppBar from "./app/AppBar";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";

export default {
  name: "Layout",
  components: { NavigationBar, AppBar, Breadcrumbs }
};
</script>

<style scoped></style>
