export default [
  {
    path: "/system",
    name: "System",
    redirect: { name: "UserManagement" },
    meta: {
      title: "System",
      icon: "television-guide",
      roles: ["admin"],
      isGroup: true // 在根据角色筛选路由时，若原本有两个子路由，筛选后剩余一个，可保证父路由渲染为分组
    },
    component: () =>
      import(/* webpackChunkName: "Layout" */ "@/components/layout/Layout"),
    children: [
      {
        path: "user",
        name: "UserManagement",
        meta: { title: "User", icon: "account-details", roles: [] },
        component: () =>
          import(
            /* webpackChunkName: "Form" */ "@/views/system/user/UserManagement"
          )
      },
      {
        path: "role",
        name: "RoleManagement",
        meta: { title: "Role", icon: "account-question", roles: [] },
        component: () =>
          import(
            /* webpackChunkName: "Form" */ "@/views/system/role/RoleManagement"
          )
      },
      {
        path: "permission",
        name: "PermissionManagement",
        meta: { title: "Permission", icon: "shield-account", roles: [] },
        component: () =>
          import(
            /* webpackChunkName: "Form" */ "@/views/system/permission/PermissionManagement"
          )
      }
    ]
  }
];
