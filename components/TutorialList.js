import React from 'react';
import styles from './TutorialList.module.css';
import { useTheme } from 'next-themes'; // Import useTheme hook from next-themes

const tutorials = [
    {
        title: "Build a Web Application on AWS Amplify",
        url: "/build-a-react-app",
        category: "FRONT-END WEB & MOBILE, SERVERLESS",
        description: "Learn how to build and deploy a React web application with user authentication, a database, and storage using AWS Amplify.",
        duration: "30 minutes",
        status: "NEW"
    }
];

const TutorialList = () => {
    const { theme, systemTheme } = useTheme(); // Get the current theme and system theme

    const effectiveTheme = theme === 'system' ? systemTheme : theme; // Determine the effective theme

    return (
        <div className={`${styles.tutorialList} ${effectiveTheme === 'dark' ? styles.dark : ''}`}>
            {tutorials.map((tutorial, index) => (
                <div className={`${styles.tutorialCard} ${effectiveTheme === 'dark' ? styles.dark : ''}`} key={index}>
                    <div className={`${styles.category} ${effectiveTheme === 'dark' ? styles.dark : ''}`}>
                        {tutorial.category}
                        <span className={`${styles.tag} ${styles.newTag}`}>{tutorial.status}</span>
                    </div>
                    <div className={`${styles.horizontalRule} ${effectiveTheme === 'dark' ? styles.dark : ''}`}></div>
                    <a href={tutorial.url} className={`${styles.title} ${effectiveTheme === 'dark' ? styles.dark : ''}`}>{tutorial.title}</a>
                    <p className={`${styles.description} ${effectiveTheme === 'dark' ? styles.dark : ''}`}>{tutorial.description}</p>
                    <div className={`${styles.horizontalRule} ${effectiveTheme === 'dark' ? styles.dark : ''}`}></div>
                    <div className={`${styles.duration} ${effectiveTheme === 'dark' ? styles.dark : ''}`}>{tutorial.duration}</div>
                </div>
            ))}
        </div>
    );
};

export default TutorialList;