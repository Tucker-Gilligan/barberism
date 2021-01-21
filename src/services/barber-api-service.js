import config from '../config';

const BarberApiService = {
  getBarbers() {
    return fetch(`${config.API_ENDPOINT}/barbers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      // .then(res => this.context.setBarberList(res))
      //res.json();
    });
  },
  // getBarber(barberId) {
  //   return fetch(`${config.API_ENDPOINT}/barbers/${barberId}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: config.API_KEY,
  //     },
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // },
  // postNewBarber(name, location, website_url, description, phone, email) {
  //   return fetch(`${config.API_ENDPOINT}/barbers`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name,
  //       location,
  //       website_url,
  //       description,
  //       phone,
  //       email,
  //     }),
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // },
};

export default BarberApiService;
