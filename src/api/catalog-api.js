import {instance} from './root';

export const CatalogAPI = {
  getCatalog: () => {
      return instance.get('catalog')
  }
}