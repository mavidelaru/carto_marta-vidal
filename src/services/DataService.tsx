import datasetFeatures from '../data/dataset-features.json'
const rawDatasetFeatures = datasetFeatures;

export class DataService {
  /**
   * @description Get the data of the jsons
   */
    getListOfTitles() {
      return rawDatasetFeatures.schema
    };
    getListOfData() {
      return rawDatasetFeatures.rows
    };

}