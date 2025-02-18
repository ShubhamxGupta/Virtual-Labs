// Sample recommended courses based on usage
const recommendedCourses = [
    {
        title: "Introduction to Virtual Labs",
        description: "Get started with Virtual Labs and learn how to navigate and utilize the platform effectively."
    },
    {
        title: "Advanced Experiment Techniques",
        description: "Enhance your skills by learning advanced techniques and best practices for conducting experiments."
    },
    {
        title: "Data Analysis for Engineers",
        description: "Learn how to collect, process, and analyze data from experiments to draw meaningful conclusions."
    },
    {
        title: "Simulation & Modeling",
        description: "Dive into simulation tools and modeling techniques used in modern engineering experiments."
    }
];

function displayRecommendedCourses() {
    const courseList = document.getElementById("course-list");
    recommendedCourses.forEach(course => {
        const li = document.createElement("li");
        li.style.marginBottom = "1rem";
        li.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
        courseList.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", displayRecommendedCourses);


const recentActivity = [
    {
      title: "Physics Experiment: Mechanics",
      date: "2025-02-01",
      description: "Studied forces, motion, and energy conservation through simulations."
    },
    {
      title: "Chemistry Experiment: Reaction Rates",
      date: "2025-02-02",
      description: "Analyzed the impact of temperature on reaction speeds."
    },
    {
      title: "Civil Engineering Lab: Structural Analysis",
      date: "2025-02-03",
      description: "Tested load-bearing capacities using virtual models."
    },
    {
      title: "Computer Science Experiment: Data Structures",
      date: "2025-02-04",
      description: "Explored algorithm efficiency and sorting techniques."
    }
  ];
  
  function displayActivity() {
    const list = document.getElementById("activityList");
    recentActivity.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${item.title}</h3>
        <p><strong>Date:</strong> ${item.date}</p>
        <p>${item.description}</p>
      `;
      list.appendChild(li);
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayActivity);