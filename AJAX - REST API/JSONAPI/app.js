document.getElementById('cargar').addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const posts = JSON.parse(this.responseText);
      let output = '';
      posts.forEach(function(post) {
        output += `
        <ul>
            <li>ID: ${post.id}</li>
            <li>userId: ${post.userId}</li>
            <li>title: ${post.title}</li>
            <li>body: ${post.body}</li>
        </ul>
        `;
      });
      document.getElementById('listado').innerHTML = output;
    }
  };
  xhr.send();
});
