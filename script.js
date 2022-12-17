//dummy data

// const posts = [
//     {
//         title : "this is tite 1",
//         body : "this is body1"
//     },
//     {
//         title : "this is tite2",
//         body : "this is body 2"
//     },
//     {
//         title : "this is tite 3",
//         body : "this is body 3"
//     },
//     {
//         title : "this is tite 4",
//         body : "this is body 4"
//     },
//     {
//         title : "this is tite 5",
//         body : "this is body 5"
//     },
//     {
//         title : "this is tite 6",
//         body : "this is body 6"
//     },
//     {
//         title : "this is tite 7",
//         body : "this is body 7"
//     },
//     {
//         title : "this is tite 8",
//         body : "this is body 8"
//     },
// ];

    // <div class="post">
    // <h4 class="post-title">Post title 1</h4>
    // <p class="post-body">Post Description 1</p>
    // </div>

//Fetch api data
    const fetchData = async (config) => {
        try { 
            const res = await axios(config);
            return res.data;
    } catch (err) {
    throw Error ("Failed to fetch");
}
};

//selection parts
const postsElement = document.querySelector(".posts");
const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const  postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
};
loadAllData();
