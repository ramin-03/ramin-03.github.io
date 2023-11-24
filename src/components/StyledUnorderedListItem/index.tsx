import type { FC } from 'react'
import clsx from 'clsx'
import ResetLI from '../ResetElements/ResetLI'
import styles from './styles.module.scss'
import { ReactNode } from 'react';

export interface StyledUnorderedListItemProps {
  className?: string
  key?: number
  children?: ReactNode;
}

const StyledUnorderedListItem: FC<StyledUnorderedListItemProps> = ({ children, className }) => (
  <ResetLI className={clsx(styles.root, className)}>{children}</ResetLI>
)

export default StyledUnorderedListItem
