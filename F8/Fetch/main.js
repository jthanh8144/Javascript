/*var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function() {
        console.log('Có lỗi');
    });*/

var courseApi = 'http://localhost:3000/courses';
fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })