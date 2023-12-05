import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@/components/Container'
import ExperienceCard from '@/components/ExperienceCard'
import GeneralInfoCard from '@/components/GeneralInfoCard'
import KeySkillsCard from '@/components/KeySkillsCard'
import SkillsSummaryCard from '@/components/SkillsSummaryCard'
import { data } from '@/data/enData'
import styles from '@/styles/home.module.scss'

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>{data.head.title}</title>
      <meta name="description" content={data.head.description} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css"
      />
    </Head>
    <a
      className="github-fork-ribbon"
      href="https://github.com/ramin-03/ramin-03.github.io"
      data-ribbon="Fork me on GitHub"
      title="Source code on Github"
    >
      Source code on Github
    </a>
    <Container className={styles.root}>
      <GeneralInfoCard data={data.generalInfo} />
      <SkillsSummaryCard data={data.skillsSummary} />
      <KeySkillsCard data={data.keySkills} />
      <ExperienceCard data={data.experience} />
    </Container>
  </>
)

export default IndexPage
