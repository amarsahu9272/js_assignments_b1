
class Group {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.members = [];
        this.posts = [];
    }

    createGroup() {

    }

    joinGroup(user) {
        this.members.push(user);
    }

    leaveGroup(user) {
        const index = this.members.indexOf(user);
        if (index !== -1) {
            this.members.splice(index, 1);
        }
    }

    createGroupPost(post) {
        this.posts.push(post);
    }
}