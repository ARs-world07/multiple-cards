const arr = [
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    name: "Aarav Sharma",
    position: "Software Engineer",
    description: "Specializes in full-stack development and cloud-native applications."
  },
  {
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    name: "Priya Verma",
    position: "Product Designer",
    description: "Creates user-centric UI/UX designs with a focus on accessibility."
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    name: "Rohit Singh",
    position: "Project Manager",
    description: "Experienced in agile methodologies and efficient project execution."
  },
  {
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    name: "Neha Gupta",
    position: "Data Analyst",
    description: "Analyzes complex datasets to extract meaningful insights."
  },
  {
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    name: "Kunal Mehta",
    position: "DevOps Engineer",
    description: "Automates CI/CD pipelines and manages cloud infrastructure."
  },

  // Additional 10 objects
  {
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    name: "Simran Kaur",
    position: "Marketing Lead",
    description: "Expert in digital campaigns, branding, and customer engagement."
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    name: "Vikram Desai",
    position: "Business Analyst",
    description: "Transforms business needs into implementable product solutions."
  },
  {
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    name: "Ananya Mishra",
    position: "HR Manager",
    description: "Focuses on employee engagement, recruitment, and culture building."
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    name: "Rahul Kapoor",
    position: "AI Engineer",
    description: "Builds intelligent machine learning systems and automation tools."
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    name: "Tanya Saxena",
    position: "Content Strategist",
    description: "Develops content plans that align brand goals with audience needs."
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "Siddharth Rana",
    position: "Cybersecurity Specialist",
    description: "Secures systems, performs audits, and builds threat detection tools."
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    name: "Reena Patel",
    position: "Customer Success Manager",
    description: "Helps clients get maximum value and ensures long-term retention."
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    name: "Harsh Trivedi",
    position: "Cloud Architect",
    description: "Designs scalable cloud infrastructures for enterprise clients."
  },
];


var sum = ''
arr.forEach(function(elem){
   sum += `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.name}</h3>
            <h4>${elem.position}</h4>
            <p>${elem.description}</p>
        </div>`
})

document.querySelector('main').innerHTML = sum 
