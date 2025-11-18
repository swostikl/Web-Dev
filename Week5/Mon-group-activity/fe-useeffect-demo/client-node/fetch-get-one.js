const apiUrl = "http://localhost:3001/api/blogs";
let id = "691adda9bde1175073551dc3";

const fetchBlog = async () => {


  const response = await fetch(`${apiUrl}/${id}`);
  console.log(`${apiUrl}/${id}`);
  

  
  // console.log(`${apiUrl}/${id}`);
  const data = await response.json();

  console.log(data);
};

fetchBlog();
