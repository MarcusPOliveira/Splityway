import AsyncStorage from '@react-native-async-storage/async-storage';

import { FRIEND_COLLECTION } from '../storageConfig';
import { friendsGetByGroup } from './friendsGetByGroup';
import { FriendStorageDTO } from './FriendStorageDTO';

export async function friendAddByGroup(newFriend: FriendStorageDTO, group: string) {
  try {
    const storedFriends = await friendsGetByGroup(group);
    const storage = JSON.stringify([...storedFriends, newFriend]);
    await AsyncStorage.setItem(`${FRIEND_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
