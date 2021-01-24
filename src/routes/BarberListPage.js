// import React, { useEffect, useContext } from 'react';
// import BarberListContext from '../contexts/BarberListContext';
// import BarberApiService from '../services/barber-api-service';
// import { Section } from '../components/Utils/Utils';
// import BarberListItem from '../components/BarberListItem/BarberListItem';
// import './BarberListPage.css';
// export default function BarberListPage(props) {
//   // static contextType = BarberListContext;
//   const BarbersContext = useContext(BarberListContext);

//   useEffect(() => {
//     BarberApiService.getBarbers()
//       .then(res => BarbersContext.setBarberList(res))
//       .catch(BarbersContext.setError);
//   });

//   useEffect(() => {
//     const { barberList = [] } = BarbersContext.barberList;
//     return barberList.map(barber => (
//       <BarberListItem key={barber.id} barber={barber} />
//     ));
//   });

//   // useEffect(() => {
//   //   BarbersContext.setError('error');
//   // });

//   return (
//     <Section list className="BarberListPage">
//       {BarbersContext.error ? (
//         <p className="red">There was an error, try again</p>
//       ) : (
//         BarbersContext.barberList
//       )}
//     </Section>
//   );
// }

import React, { Component } from 'react';
import BarberListContext from '../contexts/BarberListContext';
import BarberApiService from '../services/barber-api-service';
import { Section } from '../components/Utils/Utils';
import BarberListItem from '../components/BarberListItem/BarberListItem';
import './BarberListPage.css';
import SearchOptions from '../components/SearchOptions/SearchOptions';
export default class BarberListPage extends Component {
  static contextType = BarberListContext;

  componentDidMount() {
    this.context.clearError();
    BarberApiService.getBarbers()
      .then(res => this.context.setBarberList(res))
      .catch(this.context.setError);
  }

  renderBarbers() {
    const { barberList = [] } = this.context;
    console.log('barberList is', barberList);
    return barberList.map(
      // barber => console.log(barber.id)
      barber => <BarberListItem key={barber.id} barber={barber} />
    );
  }

  render() {
    const { error } = this.context;
    return (
      <div>
        <SearchOptions />
        <Section list className="BarberListPage">
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            this.renderBarbers()
            //this.renderBarbers()
          )}
        </Section>
      </div>
    );
  }
}
