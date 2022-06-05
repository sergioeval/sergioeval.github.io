// state
export const state = {
  skills: [],
  github: [],
  blog: [],
};

// load skills
export const loadSkills = async function () {
  // get skills
  const res = await fetch("./jsons/skills.json");
  const data = await res.json();
  state.skills = data;
};

export const loadGithub = async function () {
  const res = await fetch("./jsons/github.json");
  const data = await res.json();
  state.github = data;
};

export const loadBlog = async function () {
  const res = await fetch("./jsons/blog.json");
  const data = await res.json();
  state.blog = data;
};
