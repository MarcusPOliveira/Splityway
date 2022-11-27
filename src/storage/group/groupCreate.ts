import AsyncStorage from '@react-native-async-storage/async-storage';

import { GroupDTO } from '../../DTOs/GroupDTO';
import { groupsGetAll } from './groupsGetAll';
import { GROUP_COLLECTION } from '../storageConfig';

export async function groupCreate(newGroup: GroupDTO) {
  try {
    const storedGroups = await groupsGetAll();
    const storage = JSON.stringify([...storedGroups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    const groups = JSON.parse(storage);
    return groups;
  } catch (error) {
    throw error;
  }
}
