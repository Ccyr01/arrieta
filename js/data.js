// /*
// Treehouse Techdegree:
// FSJS Project 2 - Data Pagination and Filtering
// */

// // Array of student objects
// const data = [
//   {
//     name: {
//       title: "Miss",
//       first: "Ethel",
//       last: "Dean",
//     },
//     email: "ethel.dean@example.com",
//     registered: {
//       date: "12-15-2005",
//       age: 15,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/women/25.jpg",
//       medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
//     },
//   },
//   {
//     name: {
//       title: "Mrs",
//       first: "Lorraine",
//       last: "Lynch",
//     },
//     email: "lorraine.lynch@example.com",
//     registered: {
//       date: "02-24-2006",
//       age: 14,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/women/88.jpg",
//       medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
//     },
//   },
//   {
//     name: {
//       title: "Mr",
//       first: "Gregory",
//       last: "Vargas",
//     },
//     email: "gregory.vargas@example.com",
//     registered: {
//       date: "03-20-2013",
//       age: 7,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/men/23.jpg",
//       medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
//     },
//   },
//   {
//     name: {
//       title: "Mr",
//       first: "Lawrence",
//       last: "Martin",
//     },
//     email: "lawrence.martin@example.com",
//     registered: {
//       date: "06-10-2007",
//       age: 13,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/men/50.jpg",
//       medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
//     },
//   },
//   {
//     name: {
//       title: "Ms",
//       first: "Stacey",
//       last: "Wells",
//     },
//     email: "stacey.wells@example.com",
//     registered: {
//       date: "09-22-2004",
//       age: 16,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/women/21.jpg",
//       medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
//     },
//   },
//   {
//     name: {
//       title: "Mr",
//       first: "Terrance",
//       last: "Newman",
//     },
//     email: "terrance.newman@example.com",
//     registered: {
//       date: "06-28-2007",
//       age: 13,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/men/56.jpg",
//       medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
//     },
//   },
//   {
//     name: {
//       title: "Mr",
//       first: "Morris",
//       last: "Burton",
//     },
//     email: "morris.burton@example.com",
//     registered: {
//       date: "02-09-2016",
//       age: 4,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/men/6.jpg",
//       medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
//     },
//   },
//   {
//     name: {
//       title: "Ms",
//       first: "Terra",
//       last: "Franklin",
//     },
//     email: "terra.franklin@example.com",
//     registered: {
//       date: "12-24-2008",
//       age: 12,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/women/22.jpg",
//       medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
//     },
//   },
//   {
//     name: {
//       title: "Mr",
//       first: "Ted",
//       last: "Bradley",
//     },
//     email: "ted.bradley@example.com",
//     registered: {
//       date: "11-29-2017",
//       age: 3,
//     },
//     picture: {
//       large: "https://randomuser.me/api/portraits/men/99.jpg",
//       medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
//     },
//   },
// ];
