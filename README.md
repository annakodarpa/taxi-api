# Taxi Service API

## Introduction

This API allows clients to request rides and fleets to place bids on those requests. The API is built using TypeScript, Node.js, and MongoDB.

## Features

1. Request a Ride
2. View Ride Requests
3. Make Bid on Ride
4. View Bids on Ride
5. Accept Bid (To be implemented)

## Running Locally
run `docker-compose up --build`

## Trying it out
While running locally you can use PostMan or a similar service to test the different endpoints.
The service will be running on http://localhost:4000/ so you make the requests to 

http://localhost:4000/api/rides
or
http://localhost:4000/api/bids

for example.

### Prerequisites

- Docker
- Docker Compose
