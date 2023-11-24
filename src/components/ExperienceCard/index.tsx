import { memo } from 'react'
import type { FC } from 'react'
import Card from '../Card'
import ExperienceItem, { ExperienceItemProps } from '../ExperienceItem'
import ResetUL from '../ResetElements/ResetUL'
import styles from './styles.module.scss'

export interface ExperienceCardData {
  items: Omit<ExperienceItemProps, 'children' | 'noEndDateText'>[]
  noEndDateText: string
  title: string
}

export interface ExperienceCardProps {
  data: ExperienceCardData
  children?: never
}

const ExperienceCard: FC<ExperienceCardProps> = ({ data }) => (
  <Card title={data.title} className={styles.root}>
    <ResetUL className={styles.list}>
      {data.items.map((props) => (
        <ExperienceItem {...props} noEndDateText={data.noEndDateText} key={props.title} />
      ))}
    </ResetUL>
  </Card>
)

export default memo(ExperienceCard)
