Meteor.methods({
  'add_post': function (post) {
    post.tiem = Date.now();
    post.role = 'guest';
    Posts.insert(post);
  }
});
