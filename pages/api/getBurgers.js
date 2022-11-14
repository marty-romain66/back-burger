export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3001/api/products/burgers`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  

    return {
      props: { data }, // will be passed to the page component as props

    }
  }