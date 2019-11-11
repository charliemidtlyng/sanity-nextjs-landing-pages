export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc949663835a8ce28aac0dc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-b8rar2wd',
                  apiId: '4cbcdfdf-1273-4a9f-8abf-d85ba6121f45'
                },
                {
                  buildHookId: '5dc9496721788dfc8acbb300',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vjecgxrw',
                  apiId: '39443f9a-53b7-48c7-83b5-2437fd4af711'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charliemidtlyng/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vjecgxrw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
