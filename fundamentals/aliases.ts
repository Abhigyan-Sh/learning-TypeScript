/* @dev:::using the 'type' keyword we can define custom 'data_types', 
we can define all these 'type' in one single file and import from there */
type Developer = {
  techStack: string;
  projects: string;
  numberOfProjects: number;
  experience: number;
  languages: string;
}

const getDeveloper = (developer : Developer) : Developer => {
  return developer
}

console.log(
  getDeveloper({
    techStack: 'MERN', 
    projects: 'Auth0', 
    numberOfProjects: 4, 
    experience: 0, 
    languages: 'C++', 
  })
)