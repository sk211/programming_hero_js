function perfectFriend(friend) {
    let bigChar = friend[0];
    for (let i = 0; i < friend.length; i++) {
        const element = friend[i]
        if (element.length > bigChar.length) {
            bigChar = friend[i];
        }
    }
    return bigChar;
}
const friends = ['sujan', 'akbo', 'rakib', 'Abdur Rahaman', 'tanvir'];

const bigNamefriend = perfectFriend(friends);
console.log(bigNamefriend);
