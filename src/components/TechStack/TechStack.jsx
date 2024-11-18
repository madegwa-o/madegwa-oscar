import styles from './Tech.module.css'
import Card from '../Card/Card';
import dockerImage from '../../images/docker.svg'
import kubernatesImage from '../../images/kubernetes.svg'
import springBootImage from '../../images/spring-boot.svg'
import cloudImage from '../../images/cloud.svg'
import reactImage from '../../images/react.png'
import postmanImage from '../../images/postman.svg'


function TechStack () {

    return (
        <div className={styles.Stack}>
            <h1>My <span>T</span>ech <span>S</span>tack</h1>
            <div className={styles.tools}>
               <Card image={dockerImage} title="Docker"/>
               <Card image={kubernatesImage} title="Kubernetes"/>
               <Card image={springBootImage} title="SpringBoot"/>
               <Card image={cloudImage} title="Cloud"/>
               <Card image={reactImage} title="React js"/>
               <Card image={postmanImage} title="PostMan"/>
            </div>
            <hr />
        </div>
    )
}

export default TechStack;