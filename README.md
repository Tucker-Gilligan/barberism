# Barberism

## Live Deployment

https://barberism-client.vercel.app/

## Summary

Individuals with Autism or sensory sensitivities often have individualized needs when it comes to getting a haircut, and finding a barbershop or barber to meet these needs may be a difficult task. This often leads to avoidance of this task altogether, resulting in looking unkempt or overgrown.

Barberism is an app where these people can connect with barbers who are willing and capable to meet these individualized needs.

No more cold calling or trial and error. Barberism starts the conversation to create the perfect match.

#### User Stories

` Users start on a landing page, which provides the option to register a barber or locate a barber.`

<img width="1786" alt="LandingPage" src="https://user-images.githubusercontent.com/72029209/106841429-1931da80-6670-11eb-8256-c27cf97f0764.png">

`Users can get a list of all barbers including their services`
`Users can delete current barbers.`
`- Users can update current barbers to update their demographic or contact information.`
<img width="1791" alt="barberListPage" src="https://user-images.githubusercontent.com/72029209/106841010-3fa34600-666f-11eb-93ff-d59b8ce67d5a.png">

  <img width="1788" alt="EditPage" src="https://user-images.githubusercontent.com/72029209/106841006-3e721900-666f-11eb-8829-b9186a354dac.png">

`Users can get a list of all barbers including their services while querying by state`
<img width="1782" alt="SearchByState" src="https://user-images.githubusercontent.com/72029209/106841009-3f0aaf80-666f-11eb-8f9d-a23504899cb1.png">

` Users can create a new barber, as well as selecting the services they provide.`
![RegisterBarberPage](https://user-images.githubusercontent.com/72029209/106841350-f1427700-666f-11eb-95de-e442ab629cf5.png)

<img width="1790" alt="About Page" src="https://user-images.githubusercontent.com/72029209/106841007-3f0aaf80-666f-11eb-987a-2ba743b218b0.png">

## Technology Used

### Client:

- ReactJS
- react-router-dom for routing and in-app navigation
- CSS (vanilla CSS)
- Babel
- Webpack
- Vercel for deployment
- Jest for testing

### Backend

- Express for handling API requests
- NodeJS for interacting with the file system
- Postgrator for database migration
- Mocha, Chai, Supertest for endpoints testing
- Knex.js for interfacing with **PostgreSQL** database
- Heroku for database and server deployment
