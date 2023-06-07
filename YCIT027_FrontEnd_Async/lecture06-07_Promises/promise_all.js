const fetchUser = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call to fetch user data
      setTimeout(() => {
        const user = { id: 1, name: "John" };
        resolve(user);
      }, 2000);
    });
  };
  
  const fetchPosts = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call to fetch user posts
      setTimeout(() => {
        const posts = ["Post 1", "Post 2"];
        resolve(posts);
      }, 1500);
    });
  };
  
  const fetchComments = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call to fetch user comments
      setTimeout(() => {
        const comments = ["Comment 1", "Comment 2"];
        resolve(comments);
      }, 1000);
    });
  };
  
  Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then(([user, posts, comments]) => {
        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    })
    .catch((error) => {
      console.log("Error:", error);
    });