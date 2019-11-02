export function getFriendFromId(friends, id) {
  return friends.find(friend => friend.id === id)
}