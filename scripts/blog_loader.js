function loadBlog(id){
    const blog = blogs[id];
    const title = document.getElementById("title");
    const wrapper = document.getElementById("dataWrapper");
    title.innerHTML = blog.title;
    wrapper.innerHTML = blog.data;
}

var queryParams = getQueryParams();
var id = queryParams ? queryParams.id || 0 : 0;
loadBlog(id);