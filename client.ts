import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'a630cvdc', // you can find this in sanity.json
  dataset: 'works', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})