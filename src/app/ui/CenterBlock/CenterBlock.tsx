import styles from './CenterBlock.module.css';

export const CenterBlock = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.block}>{children}</div>
);
