const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  if (blogs.length < 1) return 0
  if (blogs.length === 1) return blogs[0].likes
  if (blogs.length > 1)
    return blogs.reduce((total, acc) => total + acc.likes, 0)
}

const favouriteBlog = blogs => {
  const fav = blogs.reduce(
    (mostLikes, current) =>
      mostLikes.likes > current.likes ? mostLikes : current,
    blogs[0]
  )
  return { title: fav.title, author: fav.author, likes: fav.likes }
}

const mostBlogs = blogs => {
  let counts = new Array(blogs.length)
  counts.fill(0)
  for (let i = 0; i < blogs.length; i++) {
    for (let j = 0; j < blogs.length; j++) {
      if (blogs[i].author === blogs[j].author) counts[i]++
    }
  }
  // console.log(counts)
  const most = blogs[counts.indexOf(Math.max(...counts))]
  return { author: most.author, blogs: Math.max(...counts) }
}

const favouriteAuthor = blogs => {
  const likesCount = new Array(blogs.length)
  likesCount.fill(0)
  for (let i = 0; i < blogs.length; i++) {
    for (let j = 0; j < blogs.length; j++) {
      if (blogs[i].author === blogs[j].author) likesCount[i] += blogs[j].likes
    }
  }
  // console.log(likesCount)
  const most = blogs[likesCount.indexOf(Math.max(...likesCount))]
  return { author: most.author, likes: Math.max(...likesCount) }
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  favouriteAuthor,
}
