import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '../storageConfig';
import { GroupDTO } from '../../DTOs/GroupDTO';

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: GroupDTO[] = storage ? JSON.parse(storage) : [];
    return groups;
  } catch (error) {
    throw error;
  }
}
