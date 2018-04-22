import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Добро пожаловать</h1>
    <p>В блог со свежей информацией из it индустрии</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
