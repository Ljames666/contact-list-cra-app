import { CardProps } from '../../../components/card-contact/CardContact';
import getStorages from '../storage/getStorage';
import setStorages from '../storage/setStorage';
export default function searchContacts(contact: string) {
    const storage = getStorages('contactList');

    const searched = storage.filter((element: CardProps) => {
        if (element.name === contact) {
            return element;
        }
        if (element.email === contact) {
            return element;
        }
        if (element.phone === contact) {
            return element;
        }
        if (element.address === contact) {
            return element;
        }
        return [];
    });

    setStorages('searchedContacts', searched);
}
