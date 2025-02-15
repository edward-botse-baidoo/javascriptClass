const collegeCourses = [
  {
    name: "Introduction to Computer Science",
    startTime: "09:00 AM",
    classroom: "Room 204",
    building: "Science Hall",
    description: "An introductory course covering fundamental programming concepts, algorithms, and problem-solving techniques."
  },
  {
    name: "Principles of Microeconomics",
    startTime: "10:30 AM",
    classroom: "Room 101",
    building: "Business Center",
    description: "An overview of microeconomic principles including supply and demand, market structures, and consumer behavior."
  },
  {
    name: "General Psychology",
    startTime: "01:00 PM",
    classroom: "Room 302",
    building: "Liberal Arts Hall",
    description: "A foundational psychology course exploring human behavior, cognition, and mental processes."
  },
  {
    name: "Calculus I",
    startTime: "02:30 PM",
    classroom: "Room 220",
    building: "Mathematics Building",
    description: "An introduction to differential and integral calculus, including limits, derivatives, and applications."
  },
  {
    name: "Modern World History",
    startTime: "04:00 PM",
    classroom: "Room 150",
    building: "History Hall",
    description: "A survey of major historical events from the Renaissance to the present, focusing on global interactions and societal changes."
  }
];

const originalCourseList = document.querySelector('#courseContainer');

let dragstartHandler = (ev) => {
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.effectAllowed = 'move';
}

let dragoverHandler = (ev) => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move'
}

let dropHandler = (ev) => {
  ev.preventDefault();
  const classNode = document.getElementById(ev.dataTransfer.getData("text/plain"));
  
  if (ev.target.classList.contains("childContainer")) {
      ev.target.appendChild(classNode);
  }
}

for (const course of collegeCourses) {
   let classContainer = document.createElement("div");
   let courseName = document.createElement("h3");
   let courseInfo = document.createElement("div");
   let courseStart = document.createElement('p');
   let courseRoom = document.createElement('p');
   let courseBuilding = document.createElement('p');
   let courseDesc = document.createElement('p');

   let toggleButton = document.createElement('button');

   courseName.textContent = `${course.name}`;
   courseStart.textContent = `Start Time: ${course.startTime}`;
   courseRoom.textContent = `Classroom: ${course.classroom}`;
   courseBuilding.content = `Building: ${course.building}`;
   courseDesc.textContent = `Description: ${course.description}`;

   toggleButton.textContent = 'Toggle Details';
   
   toggleButton.classList.add('toggleButton');
   courseName.classList.add("courseHeader");
   courseInfo.classList.add("infoContainer");
   classContainer.classList.add("classContainer");

   courseInfo.appendChild(courseStart);
   courseInfo.appendChild(courseRoom);
   courseInfo.appendChild(courseBuilding);
   courseInfo.appendChild(courseDesc);


   let showDesc = () => {
    classContainer.appendChild(courseInfo);
    toggleButton.removeEventListener("click", showDesc);
    toggleButton.addEventListener("click", closeDesc)
   }

   let closeDesc = () => {
    classContainer.removeChild(courseInfo);
    toggleButton.removeEventListener("click", closeDesc);
    toggleButton.addEventListener('click', showDesc);
    

   }

   toggleButton.addEventListener("click", showDesc);
   
   classContainer.setAttribute("id", `course-${course.name.replace(/\s+/g, '-')}`);

   classContainer.setAttribute("draggable", "true");
   classContainer.addEventListener("dragstart", dragstartHandler);
   

  
   classContainer.appendChild(courseName);
   classContainer.appendChild(toggleButton);
   originalCourseList.appendChild(classContainer);
   

   
}