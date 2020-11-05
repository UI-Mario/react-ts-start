/* eslint-disable import/prefer-default-export */
import { Page1 } from '../view/testRouterView/Page1';
import { Page2 } from '../view/testRouterView/Page2';
import { Child } from '../view/testRouterView/Child';

export const routes = [
  // { path: '/', exact: true, render: () => <Redirect to="/page1" /> },
  { path: '/page1', component: Page1 },
  {
    path: '/page2',
    component: Page2,
    routes: [
      {
        path: '/page2/child',
        component: Child,
      },
    ],
  },
];
// const routes = [
//     {
//       component: Root,
//       routes: [
//         {
//           path: "/",
//           exact: true,
//           component: Home
//         },
//         {
//           path: "/child/:id",
//           component: Child,
//           routes: [
//             {
//               path: "/child/:id/grand-child",
//               component: GrandChild
//             }
//           ]
//         }
//       ]
//     }
//   ];
