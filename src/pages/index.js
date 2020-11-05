import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import MvnBadge from '../sap/sdk-java/MvnBadge'
import BuildBadge from '../sap/sdk-js/BuildBadge'
import LicenseBadge from '../sap/sdk-js/LicenseBadge'

const flavors = [
  {
    title: <>SAP Cloud SDK for Java</>,
    link: 'docs/java/getting-started',
    imageUrl:
      'https://help.sap.com/doc/6c02295dfa8f47cf9c08a19f2e172901/1.0/en-US/logo-for-java.svg',
    badge: <MvnBadge />,
    description: (
      <>
        SAP Cloud SDK for Java allows you develop, extend, and communicate with
        SAP solutions SAP S/4HANA Cloud, SAP SuccessFactors, and many others.{' '}
        <br />
        <a href='docs/java/getting-started'>Get started with SDK for Java.</a>
      </>
    )
  },
  {
    title: <>SAP Cloud SDK for JavaScript</>,
    link: 'docs/js/getting-started',
    imageUrl:
      'https://help.sap.com/doc/2324e9c3b28748a4ae2ad08166d77675/1.0/en-US/logo-with-js.svg',
    badge: (
      <>
        <BuildBadge /> <LicenseBadge />
      </>
    ),
    description: (
      <>
        SAP Cloud SDK for JavaScript leverages the popularity and flexibility of
        Node.js ecosystem for building apps and extensions on top of SAP
        solutions and deploy them to cloud. <br />
        <a href='docs/js/getting-started'>
          Get started with SDK for JavaScript
        </a>
      </>
    )
  },
  {
    title: <>Continuous delivery toolkit</>,
    link: 'docs/devops/getting-started',
    imageUrl:
      'https://help.sap.com/doc/6c02295dfa8f47cf9c08a19f2e172901/1.0/en-US/logo-for-cd.svg',
    badge: <LicenseBadge />,
    description: (
      <>
	SAP Cloud SDK provides a ready-to-use Jenkins Pipeline-as-Code that assures a high level of quality on process as well as code level.<br />
        <a href='docs/devops/getting-started'>
          Get started with best CI/CD practices
        </a>
      </>
    )
  }
]

function Flavors ({ imageUrl, link, title, description, badge }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col')}>
      {imgUrl && (
        <div className='text--center'>
          <a href={link}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3>{title}</h3>
      {badge || ''}
      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='SAP Cloud SDK is a one stop shop for developing and extending SAP applications in a Cloud'
    >
      {/* <div className="alert alert--info" style={{textAlign: 'center', fontSize: '2em'}} role="alert">
      <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to='https://sapinsights.eu.qualtrics.com/jfe/form/SV_0pUmWpCadpoLhyZ'
            >
              <span style={{ fontSize: '2em'}}>
              Take our <strong>survey</strong> to help us improve!
              </span>
            </Link>
          </div>
     </div>*/}
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className={classnames('hero__subtitle', styles.heroSub)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/overview/getting-started')}
            >
              Get Started &#8702;
            </Link>
          </div>
        </div>
      </header>
      <main>
        {flavors && flavors.length && (
          <section className={styles.flavors}>
            <div className='container'>
              <div className='row'>
                {flavors.map((props, idx) => (
                  <Flavors key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={classnames(styles.whysdk, styles.whysdkDark)}>
          Why Cloud SDK?
        </section>
        <section className={styles.features}>
          <div className='container'>
            <div className='row'>
              <div className='col col--7'>
                <div className={classnames(styles.featLeft)}>
                  <h2>Pre-generated type-safe API client libraries</h2>
                  <p>
                    For SAP services, applications, and platforms to simplifies integration and extensibility
                  </p>
                  <a href='docs/java/getting-started'>Get started with SDK for Java.</a>
                </div>
              </div>
              <div className={classnames('col col--5', styles.featRight)}>
                <img className={styles.featureImg} src={useBaseUrl('img/icons/undraw_code_typing.svg')} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
