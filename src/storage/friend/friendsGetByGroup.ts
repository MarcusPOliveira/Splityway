import AsyncStorage from "@react-native-async-storage/async-storage";

import { FRIEND_COLLECTION } from "../storageConfig";
import { FriendStorageDTO } from './FriendStorageDTO';

export async function friendsGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${FRIEND_COLLECTION}-${group}`);
    const friends: FriendStorageDTO[] = storage ? JSON.parse(storage) : [];
    return friends;
  } catch (error) {
    throw error;
  }
}
