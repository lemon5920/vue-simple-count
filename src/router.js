export default function (router) {
  router.map({
    '/': {
      // 設定 name 能夠更明確的被指定
      name: 'index',
      component: require('./components/hello.vue')
    }
  })
}
