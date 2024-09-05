import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AWS Workshops</span>,
  project: {
    link: "https://github.com/tutran985/AWS-Workshops",
  },
  docsRepositoryBase: "https://github.com/tutran985/AWS-Workshops",
  footer: {
    text: "",
  },
  editLink: {
    component: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - AWS Workshops",
    };
  },
  feedback: {
    content: "Give feedback",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AWS Workshop" />
      <meta property="og:description" content="Let's learn together" />
      <link rel="icon" type="image/png" href="/images/logo.png" />
    </>
  ),
  navigation: {
    prev: true,
    next: true
  }
}

export default config
