module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/projects/:slug',
      handler: 'project.findBySlug',
    }
  ]
}
