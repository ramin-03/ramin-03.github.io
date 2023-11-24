import React, { ReactNode, memo } from 'react'
import type { FC } from 'react'
import Card from '../Card'
import ResetUL from '../ResetElements/ResetUL'
import StyledUnorderedListItem from '../StyledUnorderedListItem'
import styles from './styles.module.scss'

export interface AdditionalEnhancementsCardData {
  title: string
  points: ReactNode[]
}

export interface AdditionalEnhancementsCardProps {
  data: AdditionalEnhancementsCardData
  children?: never
}

const AdditionalEnhancementsCard: FC<AdditionalEnhancementsCardProps> = ({ data }) => (
  <Card title={data.title} className={styles.root}>
    <ResetUL className={styles.list}>
      {data.points.map((point, i) => (
        <StyledUnorderedListItem key={i}>{point}</StyledUnorderedListItem>
      ))}
    </ResetUL>
  </Card>
)

export default memo(AdditionalEnhancementsCard)
