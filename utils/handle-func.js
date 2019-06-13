exports.GET_LIST_WITH_USER_ID = (arr, userID) => {
    return arr.filter(post => Object.is(post.userId.toString(), userID.toString()))
}

exports.GET_INFO_POST_WITH_POST_ID = (arr, postID) => {
    return arr.find(post => Object.is(post.id.toString(), postID.toString()));
}