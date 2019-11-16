import { CoreAPIService } from 'service';

export const getNotes = () => CoreAPIService.get('api/items');

export const addNote = (data) => {
  return CoreAPIService.post('api/items', data.payload);
};

export const addNotePatch = (data) => CoreAPIService.patch('api/items', data.payload);