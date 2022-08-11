import dataRecordsParams from '../../pages/dashboard/dashboard' 
import './table.css'
import { DataService } from "../../services/DataService";
import Components from "../../components";

export interface dataRecordsParams {
    
    cartodb_id: number;
    gps_code: null;
    name: string;
    geom: {
        type: string;
        coordinates: number[];
    };
  }
  export interface tableHeaderParams{
      name: string;
      type: string;
  }
  
export default function Table() {

    const dataService = new DataService();
    const data_records:dataRecordsParams[] = dataService.getListOfData();
    const table_headers: any[] = dataService.getListOfTitles();
  return (
      <div className="table-container">
          <table className="table-container__table-border">
            <thead className="table-container__thead">
              <tr className="table-container__thead-row">
                { table_headers.map((item) => (
                    <th scope="col">{item.name}
                    <Components.Tag type='info' text='test'></Components.Tag>
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              { data_records.map((item) => (
                  <tr >
                  <td>{item.cartodb_id}</td>
                  <td>{item.gps_code ? item.gps_code : '-'}</td>
                  <td>{item.name}</td>
                  <td>{item.geom.coordinates}</td>
                  

                  </tr>
                ))}

            </tbody>
          </table>
          
      </div>
  );
}
