import { v4 as uuidv4 } from 'uuid';

export function createRequestId() {
    return uuidv4()
}
