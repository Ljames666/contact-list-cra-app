import { CardProps } from '../../../components/card-contact/CardContact';

export default function getStorages(key: string): CardProps[] {
    const storages = localStorage.getItem(key) || '[]';
    return JSON.parse(storages);
}
