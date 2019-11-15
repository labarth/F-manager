import { CoreAPIService } from 'service';

export const getNotes = () => CoreAPIService.get('api/items');
