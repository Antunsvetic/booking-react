# Booking React App Technical Documentation

## Overview

This document provides a comprehensive guide to the Booking React app, a frontend application designed to manage bookings for a property. The app is built using React with ES6 or newer syntax, focusing on functional components, and is structured to handle CRUD (Create, Read, Update, Delete) operations for bookings. It also incorporates global state management and ensures a responsive design for both desktop and mobile devices.

## Technical Setup

- **React Version**: The app uses React with ES6 or newer syntax for functional components.
- **State Management**: The global state of bookings is managed using a state management library of choice.
- **Responsive Design**: The app is designed to be fully responsive, ensuring a seamless user experience across desktop and mobile devices.

## Features

### Booking Management

- **Create a Booking**: Users can create a new booking by selecting a start and end date.
- **Read a Booking**: Existing bookings can be viewed by users.
- **Update a Booking**: Users can update the details of an existing booking.
- **Delete a Booking**: Users can remove a booking from the system.

### Validation and User Experience

- **Prevent Double Bookings**: The app includes logic to prevent overlapping bookings, ensuring that a property is not double-booked.
- **Date Validation**: Start and end dates for bookings are validated to ensure they are within acceptable ranges.

## Global State Management

The app utilizes a global state store to manage the state of bookings. This approach allows for efficient state management across the application, ensuring that booking data is consistently accessible and updated.

## Responsive Design

The app is designed with responsiveness in mind, ensuring that it provides an optimal user experience on both desktop and mobile devices. This is achieved through the use of CSS media queries and responsive design principles.

## Development Environment

- **Vite**: The project is set up with Vite, a build tool that offers fast refresh and efficient development experience.
- **ESLint**: ESLint is configured for code quality and consistency, ensuring that the codebase adheres to best practices.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Antunsvetic/booking-react.git`
2. Navigate to the project directory: `cd booking-react`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

The app will be available at `http://localhost:5173` in your browser.

## Conclusion

The Booking React app is a robust solution for managing property bookings, offering a user-friendly interface and efficient state management. Its focus on responsive design ensures a seamless experience across all devices, while its validation logic prevents double bookings and ensures date integrity. This documentation provides a comprehensive overview of the app's features and technical setup, serving as a guide for developers and users alike.
