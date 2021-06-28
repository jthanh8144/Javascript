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

/*var courseApi = 'http://localhost:3000/courses';
fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })*/

var courseApi = 'http://localhost:3000/courses';
function start() {
    getCourses(renderCourses);
    handleCreateForm();
}
start();

// function
function get1Course(id) {
    return fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        return courses.find(function(course) {
            return course.id == id;
        });
    });
}
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}
function createCourses(data, callback) {
    fetch(courseApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function(response) {
            response.json();
        })
        .then(callback);
}
function updateCourse(id, data, callback) {
    fetch(courseApi + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function(response) {
            response.json();
        })
        .then(callback);
}
function handleDeleteCourse(id){
    fetch(courseApi + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function(response) {
            response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}
function handleUpdateCourse(id) {
    var saveBtn = document.querySelector('#create');
    saveBtn.innerHTML = 'Lưu';
    var nameInput = document.querySelector('input[name="name"]');
    var descriptionInput = document.querySelector('input[name="description"]');
    get1Course(id)
        .then(function(data) {
            nameInput.value = data.name;
            descriptionInput.value = data.description;
        });
    saveBtn.onclick = function() {
        var data = {
            name: nameInput.value,
            description: descriptionInput.value
        }
        updateCourse(id, data, function() {
            getCourses(renderCourses);
        });
    }
    
}
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            </li>`
    });
    listCoursesBlock.innerHTML = htmls.join('');
}
function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        }
        createCourses(formData, function() {
            getCourses(renderCourses);
        });
    }
}