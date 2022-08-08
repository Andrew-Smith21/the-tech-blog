const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Using MVC has helped me stay organized as I create full-stack applications.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I definitely thought these were the same thing.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Such a helpful distinction.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'This makes create SQL queries so much more streamlined.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'This is so much better than what I was using before!',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'One of my favorite things to learn about.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'I cried tears of joy when I learned about this.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'MVC really helps with separation of concerns.',
    user_id: 2,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
