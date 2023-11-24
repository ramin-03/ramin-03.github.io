import type { FC, ReactNode } from 'react'
import styles from './styles.module.scss'
interface CanvasContainerProps {
  children?: ReactNode
}

const CanvasContainer: FC<CanvasContainerProps> = ({ children }) => <div className={styles.root}>{children}</div>

export default CanvasContainer
