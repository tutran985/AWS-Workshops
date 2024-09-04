import React from 'react';
import styles from './TutorialList.module.css'; // Update the import path

// Sample data for tutorial listings
const tutorials = [
    {
        title: "Build a Web Application on AWS Amplify",
        url: "/build-a-react-app",
        category: "FRONT-END WEB & MOBILE, SERVERLESS",
        description: "Learn how to build and deploy a React web application with user authentication, a database, and storage using AWS Amplify.",
        duration: "30 minutes",
        new: true
    }
];

const TutorialList = () => (
    <div className={styles.tutorialList}>
        {tutorials.map((tutorial, index) => (
            <div className={styles.tutorialCard} key={index}>
                <div className={styles.category}>
                    {tutorial.category}
                    {tutorial.new && <span className={`${styles.tag} ${styles.newTag}`}>NEW</span>}
                    {tutorial.updated && !tutorial.new && <span className={`${styles.tag} ${styles.updatedTag}`}>UPDATED</span>}
                </div>
                <div className={styles.categoryRule}></div>  {/* Horizontal rule added here */}
                <a href={tutorial.url} className={styles.title}>{tutorial.title}</a>
                <p className={styles.description}>{tutorial.description}</p>
                <div className={styles.horizontalRule}></div>  {/* Horizontal rule for separating description from duration */}
                <div className={styles.duration}>{tutorial.duration}</div>
            </div>
        ))}
    </div>
);


export default TutorialList;
