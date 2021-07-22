module.exports = {
  siteMetadata: {
    title: "MED Consulting",
    description: "Counseling and assistance in the medical circuit in Vienna. The best doctors, the best hospitals.",
    keywords: ["medical"],
    url: ""
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
        path: `${__dirname}/src/images/`
      }
    }
  ]
}