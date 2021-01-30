import config from '../config';

const barberURL = `${config.API_ENDPOINT}/barbers`;

const BarberApiService = {
  getBarbers() {
    return fetch(`${barberURL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },

  postNewBarber(barber) {
    return fetch(`${barberURL}`, {
      method: 'POST',
      body: JSON.stringify(barber),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getBarberByState(state) {
    return fetch(`${barberURL}/?state=${state}`, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getBarberById(id) {
    return fetch(`${barberURL}/${id}`, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteBarber(id) {
    return fetch(`${barberURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then(res => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e));
      }
    });
  },
  patchBarber(barber, id) {
    return fetch(`${barberURL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(barber),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then(res => {
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
};

export default BarberApiService;
