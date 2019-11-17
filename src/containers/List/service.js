import { CoreAPIService } from 'service';

const url = 'api/items';

export const getNotes = () => CoreAPIService.get(url);

export const addNote = (data) => CoreAPIService.patch(url, data.payload);
