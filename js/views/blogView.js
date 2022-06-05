class BlogView {
  _linkBlog = document.getElementById("menuBlog");
  _blogContent = document.getElementById("blog");
  _aboutMeContent = document.getElementById("aboutMeContent");
  _homeContent = document.getElementById("homeContent");
  _githubContent = document.getElementById("githubContent");
  _currentPagename = document.getElementById("currentPageName");

  showView(blogData) {
    this._homeContent.classList.add("hiden");
    this._aboutMeContent.classList.add("hiden");
    this._githubContent.classList.add("hiden");
    this._blogContent.classList.remove("hiden");
    this._currentPagename.innerText = "Blog";

    // inserting articles in blog
    blogData.forEach((blog) => {
      let html = `<article>
      <h1>${blog.title}</h1>
              <img src="${blog.img}" alt="imagenHere" />
              <p>
              ${blog.content}	
              </p>
              <p>
                Here you can find more information:
                `;
      blog.references.forEach((ref) => {
        const textToAdd = `<br />
            <a href="${ref.link}" >${ref.text}</a>`;
        html += textToAdd;
      });
      html += "<article/>";
      // insert blog
      this._blogContent.insertAdjacentHTML("beforeend", html);
    });
  }

  cleanTable() {
    this._blogContent.innerHTML = "";
  }

  renderViewHtml(handler) {
    this._linkBlog.addEventListener("click", handler);
  }
}

export default new BlogView();
