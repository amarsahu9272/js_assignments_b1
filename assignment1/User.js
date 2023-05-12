class User {
    constructor(name, email, password, dateOfBirth, location, profilePicture) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.location = location;
        this.profilePicture = profilePicture;
        this.posts = [];
    }


    createUser() {

    }

    createPost(post) {
        this.posts.push(post);
    }

    likePost(post) {

    }

    commentPost(post, comment) {

    }
}