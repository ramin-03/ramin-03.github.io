import { memo } from 'react'
import type { FC } from 'react'
import Card from '../Card'
import styles from './styles.module.scss'

export interface GeneralInfoCardData {
  jobPosition: string
  fullName: string
  emailLabel: string
  email: string
  mobileLabel: string
  mobile: string
  formattedMobile: string
  LinkedinLabel: string
  Linkedin: string
  githubLabel: string
  github: string
}

export interface GeneralInfoCardProps {
  data: GeneralInfoCardData
  children?: never
}

const GeneralInfoCard: FC<GeneralInfoCardProps> = ({ data }) => (
  <Card className={styles.root}>
    <div className={styles.content}>
      <h1 className={styles.title}>{data.fullName}</h1>
      <h2 className={styles.subTitle}>{data.jobPosition}</h2>
      <dl className={styles.descriptionList}>
        <dt>{data.emailLabel}</dt>
        <dd>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </dd>

        <dt>{data.mobileLabel}</dt>
        <dd>
          <a href={`tel:${data.mobile}`}>{data.formattedMobile}</a>
        </dd>

        <dt>{data.LinkedinLabel}</dt>
        <dd>
          <a href="https://www.linkedin.com/in/ramin-ashouri/" target="blank">
            {data.Linkedin}
          </a>
        </dd>

        <dt>{data.githubLabel}</dt>
        <dd>
          <a href="https://github.com/ramin-03/" target="blank">
            {data.github}
          </a>
        </dd>
      </dl>
    </div>
  </Card>
)

export default memo(GeneralInfoCard)
