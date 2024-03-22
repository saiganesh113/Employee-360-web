import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import Header from '../Header/header';
import './traininganddevelopment.css';

function TrainingandDevelopment() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Fetch the list of courses and their video details from your API or database
    const coursesData = [
      {
        id: 1,
        title: 'Full Stack Development',
        domain: 'Web Development',
        videos: [
          { id: 1, title: 'Introduction to Full Stack', videoUrl: 'fullstack_video1.mp4' },
          { id: 2, title: 'Database Management', videoUrl: 'fullstack_video2.mp4' },
          // Add more video details for this course
        ],
        tasks: [
          { id: 1, title: 'Create a simple web page', description: 'Build a webpage using HTML and CSS.',fileUpload: null },
          { id: 2, title: 'Database project', description: 'Create and manage a simple database.',fileUpload: null },
        ],
      },
      {
        id: 2,
        title: 'SAP',
        domain: 'Enterprise Software',
        videos: [
          { id: 1, title: 'SAP Basics', videoUrl: 'sap_video1.mp4' },
          { id: 2, title: 'SAP Configuration', videoUrl: 'sap_video2.mp4' },
          // Add more video details for this course
        ],
        tasks: [
          { id: 1, title: 'Configure SAP System', description: 'Set up and configure an SAP system.',fileUpload: null },
          { id: 2, title: 'SAP Integration', description: 'Integrate SAP with other systems.',fileUpload: null },
          // Add more tasks for this course
        ],
      },
      {
        id: 3,
        title: 'TESTING',
        domain: 'API Testing',
        videos: [
          { id: 1, title: 'Java Basics', videoUrl: 'Testing_video1.mp4' },
          { id: 2, title: 'Java introduction', videoUrl: 'Testing_video2.mp4' },
          // Add more video details for this course
        ],
        tasks: [
          { id: 1, title: 'Testing the URL', description: 'testing the Url links.',fileUpload: null },
          { id: 2, title: 'API Controls', description: 'controlling the api.' ,fileUpload: null },
          // Add more tasks for this course
        ],
      },
      {
        id: 4, 
        title: 'CYBER SECURITY',
        domain: 'Security Control',
        videos: [
          { id: 1, title: 'Basics', videoUrl:'Cyber security_video1.mp4'},
          { id: 2, title: 'Introduction', videoUrl:'Cyber security_video2.mp4'},
        ],
        tasks: [
          { id: 1, title: 'Security control', description: 'Secuirty Controls for the product',fileUpload: null },
          { id: 2, title: 'Generate Token', description: 'Generate the token.',fileUpload: null },
          // Add more tasks for this course
        ],
      },
      {
        id: 5 ,
        title: 'DATA SCIENCE',
        domain: 'Analyzers',
        videos: [
          { id: 1, title: 'Basics', videoUrl:'DataScience_video1.mp4'},
          { id: 2, title: 'Introduction', videoUrl:'DataScience_video2.mp4'},
        ],
        tasks: [
          { id: 1,title: 'Data Collection',description: 'Collecting the data from different sources',fileUpload: null },
          { id: 2, title: 'Machine Learning', description: 'create a task by using the ML feature in it',fileUpload: null },
          // Add more tasks for this course
        ],
      },
    ];
    setCourses(coursesData);
  }, []);

  const playVideo = (courseId, videoUrl) => {
    // Set the selected course and video to play
    setSelectedCourse({ courseId, videoUrl });
  };

  return (
    <>
    <div className='TandD'>
      <Header />
      <div className="app">
        <div className="courses-list">
          {courses.map((course) => (
            <div key={course.id} className="course">
              <h2>{course.title}</h2>
              <p><strong>Domain:</strong> {course.domain}</p>
              <ul>
                {course.videos.map((video) => (
                  <li key={video.id}>
                    <button onClick={() => playVideo(course.id, video.videoUrl)}>{video.title}</button>
                  </li>
                ))}
              </ul>
              <h3>Tasks:</h3>
              <ul>
                {course.tasks.map((task) => (
                  <li key={task.id}>
                    <p><strong>{task.title}:</strong> {task.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="video-player">
          {selectedCourse && (
            <video controls>
              <source src={selectedCourse.videoUrl} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default TrainingandDevelopment;
