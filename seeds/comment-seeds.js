const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Nice"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Good"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Great"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Nice work"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Useful"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;