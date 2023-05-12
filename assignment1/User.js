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
        let users;
        return users.add({
            name: this.name,
            email: this.email,
            password: this.password,
            dateOfBirth: this.dateOfBirth,
            location: this.location,
            profilePicture: this.profilePicture
        })


    }

    createPost(post) {
        this.posts.push(post);
    }

    likePost(post) {
        this.posts.push(post);
    }



    commentPost(post, comment) {
        this.posts.push(post);
    }
}