import styles from './AboutSection.module.css'
import MethodBlock from '../code-components/MethodBlock'

const AboutSection = () => {
  return (
    <section className={styles['about-section']}>
      <MethodBlock accessModifier="public" returnType="String" methodName="about" params="DevJian me">
        I'm Back-end Developer who solves problems.
      </MethodBlock>
    </section>
  )
}
export default AboutSection