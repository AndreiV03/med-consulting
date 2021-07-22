module.exports = {
  siteMetadata: {
    title: "MED Consulting",
    description: "Counseling and assistance in the medical circuit in Vienna. The best doctors, the best hospitals.",
    url: "",
    author: "Andrei Voicu"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/assets/data/`
      }
    }
  ]
}